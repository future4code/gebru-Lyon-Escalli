import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRequestData } from '../hooks/useRequestData'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToCreateTripPage, goToLoginPage} from '../routes/Coordinator'
import styled from 'styled-components'

const Header = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  background-color:#191970;
  border: 1px solid black;
  color:white;
  padding: 0px 0px 0px 15px;
`

const Main = styled.div`
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: grid;
    justify-items: center;
    background-color:#87CEEB;
    color: black;
    border: 1px solid black;
    padding: 10px 0px 10px 0px;
  }
  display: grid;
  justify-items: center;
  background-color:#87CEEB;
  color: black;
  border: 1px solid black;
  padding: 20px 0px 20px 0px;
`

const ContainerFirst = styled.div`
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    background-color:#EEE9E9;
    color: black;
    border: 1px solid black;
    padding: 30px 30px 30px 30px;
  }
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  background-color:#EEE9E9;
  color: black;
  border: 1px solid black;
  padding: 50px 50px 50px 50px;
`

const Footer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  background-color:#191970;
  border: 1px solid black;
  color:white;
  padding: 0px 0px 0px 15px;
`

const Button = styled.button`
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    padding:20px 70px 20px 70px;
    margin-bottom: 10px;
    background-color:#191970;
    border: 1px solid black;
    color:white;
    border-radius: 5px;
    font-size: 16px;
  }
  padding: 10px 50px 10px 50px;
  margin-bottom: 10px;
  background-color:#191970;
  border: 1px solid black;
  color:white;
  border-radius: 5px;
  &:hover {
    background-color: #EEE9E9;
    color:black;
  }
`

const ButtonTwo = styled.button`
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    padding:20px 70px 20px 70px;
    margin-bottom: 10px;
    background-color:#191970;
    border: 1px solid black;
    color:white;
    border-radius: 5px;
    font-size: 16px;
  }
  padding: 10px 50px 10px 50px;
  margin-bottom: 10px;
  background-color:#191970;
  border: 1px solid black;
  color:white;
  border-radius: 5px;
  &:hover {
    background-color: #87CEEB;
    color:black;
  }
`


export const TripDetailsPage = () => {
  const navigate = useNavigate()

  const mainUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lyon-escalli-gebru"
  const token = localStorage.getItem("token")
  const tripId = localStorage.getItem("tripId")
  const header = {
    headers: {
      auth: token
    }
  }
  const [tripDetails, isLoading, error, getData] = useRequestData(`${mainUrl}/trip/${tripId}`, header)
   
  useEffect (() => {
    if(token === null) {
      goToLoginPage(navigate)
    }
  },[navigate])

  const approveCandidate = (candidateID) => {
    const body = {
      approve: true
    }

    axios
    .put(`${mainUrl}/trips/${tripId}/candidates/${candidateID}/decide`, body, header)
    .then((res) => {
      alert("Decisão guardada com sucesso!")
      getData()
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const deleteCandidate = (candidateID) => {
    const body = {
      approve: false
    }

    axios
    .put(`${mainUrl}/trips/${tripId}/candidates/${candidateID}/decide`, body, header)
    .then((res) => {
      alert("Decisão guardada com sucesso!")
      getData()
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const candidates = 
  tripDetails && tripDetails.trip && tripDetails.trip.candidates.map((index) => {
    return <ContainerFirst>
      <p><b>Nome do Candidato:</b> {index.name}</p>
      <p><b>Idade:</b> {index.age}</p>
      <p><b>País:</b> {index.country}</p>
      <p><b>Profissão:</b> {index.profession}</p>
      <p><b>Texto de Candidatura:</b> {index.applicationText}</p>
      <ButtonTwo onClick={() => approveCandidate(index.id)}>Aprovar Candidato</ButtonTwo>
      <ButtonTwo onClick={() => deleteCandidate(index.id)}>Deletar Candidato</ButtonTwo>
    </ContainerFirst>
  })

  const candidatesApproved = 
  tripDetails && tripDetails.trip && tripDetails.trip.approved.map((index) => {
    return <ContainerFirst>
    <li key={index.id}>{index.name}</li>
    </ContainerFirst>
  })

  return (
    <>
      <Header>
        <h2>Detalhes da Viagem</h2>
      </Header>
      <Main>
        <Button onClick={() => goToAdminHomePage(navigate)}>Administrador - Home</Button>
        <br />
        <Button onClick={() => goToCreateTripPage(navigate)}>Criar nova viagem</Button>
        <br />
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro.</p>}
        {!isLoading && tripDetails && tripDetails.trip && (
          <ContainerFirst>
            <h3>{tripDetails.trip.name}</h3>
            <p><b>Planeta:</b> {tripDetails.trip.planet}</p>
            <p><b>Duração:</b> {tripDetails.trip.durationInDays}</p>
            <p><b>Data:</b> {tripDetails.trip.date}</p>
            <p><b>Descrição:</b> {tripDetails.trip.description}</p>
          </ContainerFirst>
        )}
        {!isLoading && tripDetails && tripDetails.trip && tripDetails.trip.candidates && tripDetails.trip.candidates.length > 0 && (<> <h3>Candidatos Pendentes:</h3> {candidates} </>)}
        {!isLoading && tripDetails && tripDetails.trip && tripDetails.trip.approved && tripDetails.trip.approved.length > 0 && (<> <h3> Candidatos Aprovados:</h3> {candidatesApproved} </>)}
        {!isLoading && tripDetails && tripDetails.length === 0 && (<p>Não há informações disponíveis no momento, tente novamente mais tarde.</p>)}
      </Main>
      <Footer>
        <p>All rights reserved © 2022</p>
      </Footer>
    </>
  )
}

export default TripDetailsPage