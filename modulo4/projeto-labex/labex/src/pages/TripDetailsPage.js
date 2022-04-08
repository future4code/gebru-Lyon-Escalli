import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRequestData } from '../hooks/useRequestData'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToCreateTripPage, goToLoginPage} from '../routes/Coordinator'

export const TripDetailsPage = () => {
    const navigate = useNavigate()

    const[control, setControl] = useState(true)
    const mainUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lyon-escalli-gebru"
    const token = localStorage.getItem("token")
    const tripId = localStorage.getItem("tripId")
    const header = {
      headers: {
        auth: token
      }
    }
    const [tripDetails, isLoading, error] = useRequestData(`${mainUrl}/trip/${tripId}`, header)
   
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
      setControl(!control)
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
      setControl(!control)
    })
    .catch((err) => {
        console.log(err);
    })
    }

    const candidates = 
    tripDetails && tripDetails.trip && tripDetails.trip.candidates.map((index) => {
      return <>
      <p>Nome do Candidato: {index.name}</p>
      <p>Idade: {index.age}</p>
      <p>País: {index.country}</p>
      <p>Profissão: {index.profession}</p>
      <p>Texto de Candidatura: {index.applicationText}</p>
      <button onClick={() => approveCandidate(index.id)}>Aprovar Candidato</button>
      <button onClick={() => deleteCandidate(index.id)}>Deletar Candidato</button>
      </>
    })

    const candidatesApproved = 
    tripDetails && tripDetails.trip && tripDetails.trip.approved.map((index) => {
      return <li key={index.id}>{index.name}</li>
    })

    return (
      <>
          {isLoading && <p>Carregando...</p>}
          {!isLoading && error && <p>Ocorreu um erro.</p>}
          {!isLoading && tripDetails && tripDetails.trip && (<h1>{tripDetails.trip.name}</h1>)}
          {!isLoading && tripDetails && tripDetails.trip && (
            <>
            <p>Planeta: {tripDetails.trip.planet}</p>
            <p>Duração: {tripDetails.trip.durationInDays}</p>
            <p>Data: {tripDetails.trip.date}</p>
            <p>Descrição: {tripDetails.trip.description}</p>
            </>
          )}
          {!isLoading && tripDetails && tripDetails.trip && tripDetails.trip.candidates && tripDetails.trip.candidates.length > 0 && (<p>Candidatos Pendentes: {candidates}</p>)}
          {!isLoading && tripDetails && tripDetails.trip && tripDetails.trip.approved && tripDetails.trip.approved.length > 0 && (<p>Candidatos Aprovados: {candidatesApproved}</p>)}
          {!isLoading && tripDetails && tripDetails.length === 0 && (<p>Não há informações disponíveis no momento, tente novamente mais tarde.</p>)}
          <button onClick={() => goToAdminHomePage(navigate)}>Administrador - Home</button>
          <button onClick={() => goToCreateTripPage(navigate)}>Criar nova viagem</button>
        </>
    )
}

export default TripDetailsPage