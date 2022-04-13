import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useRequestData } from '../hooks/useRequestData'
import { useNavigate } from 'react-router-dom'
import { goToCreateTripPage, goToTripDetailsPage, goToLoginPage, goToHomePage, goToAdminHomePage } from '../routes/Coordinator'

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
  padding: 75px 75px 75px 75px;
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
    background-color: #87CEEB;
    color:black;
  }
`

const AdminHomePage = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem("token")
  const headerContent = 'Content-Type: application/json'
  const mainUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lyon-escalli-gebru"
  const header = {
    headers: {
      headerContent: headerContent,
      auth: token
    }
  }
  const [tripsList, isLoading, error, getData] = useRequestData(`${mainUrl}/trips`, header)

  useEffect (() => {
    if(token === null) {
      goToLoginPage(navigate)
    }
  },[navigate])

  const getTripDetails = (tripID) => {
    localStorage.removeItem("tripId")
    localStorage.setItem("tripId",tripID)
    goToTripDetailsPage(navigate)
  }

  const allTrips = 
  tripsList.trips && tripsList.trips.map((trip) => {
  return <ContainerFirst>
      <li key={trip.id}> <b>
      {trip.name} </b></li>
      <br />
      <Button onClick={() => getTripDetails(trip.id)}>Detalhes da viagem</Button>
      <Button onClick={() => deleteTrip(trip.id)}>Deletar Viagem</Button>
    </ContainerFirst>
  })


  const deleteTrip = (tripID) => {
    axios
    .delete(`${mainUrl}/trips/${tripID}`, header)
    .then((res) => {
      alert("Viagem apagada com sucesso!")
      getData()
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  const goToLogout = () => {
    localStorage.removeItem("token")
    goToLoginPage(navigate)
  }

  return (
    <>
      <Header>
        <h2>Administrador - Home</h2>
      </Header>
      <Main>
      <Button onClick={() => goToCreateTripPage(navigate)}>Criar Nova Viagem</Button>
        <br />
        <Button onClick={() => goToHomePage(navigate)}>Home</Button>
        <br />
        <Button onClick={goToLogout}>Logout</Button>
        <h3>Viagens Cadastradas</h3>
        {allTrips}
        <br />
      </Main>
      <Footer>
        <p>All rights reserved © 2022</p>
      </Footer>
    </>
  )
}

export default AdminHomePage