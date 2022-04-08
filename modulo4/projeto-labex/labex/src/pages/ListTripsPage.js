import React from 'react'
import styled from 'styled-components'
import { useRequestData } from '../hooks/useRequestData'
import { useNavigate } from 'react-router-dom'
import { goToApplicationFormPage, goToHomePage} from '../routes/Coordinator'

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
  grid-template-columns: 1fr 1fr 1fr;
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
    background-color: #4169E1;
    color:black;
  }
`

const ListTripsPage = () => {
  const navigate = useNavigate()

  const mainUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lyon-escalli-gebru"

  const [tripsList, isLoading, error] = useRequestData(`${mainUrl}/trips`)

  const allTrips = 
  tripsList.trips && tripsList.trips.map((trip) => {
    return <ContainerFirst>
      <p><b>Nome da viagem:</b> {trip.name}</p>
      <p><b>Planeta:</b> {trip.planet}</p>
      <p><b>Duração:</b> {trip.durationInDays}</p>
      <p><b>Data:</b> {trip.date}</p>
      <p><b>Descrição:</b> {trip.description}</p>
      <Button onClick={() => applyToTrip(trip.id, trip.name)}> Candidate-se a esta viagem!</Button>
    </ContainerFirst>
  })

  const applyToTrip = (tripID, tripName) => {
    localStorage.removeItem("TripIdApply")
    localStorage.setItem("TripIdApply",tripID)
    localStorage.removeItem("TripNameApply")
    localStorage.setItem("TripNameApply",tripName)
    goToApplicationFormPage(navigate)
  }

  return (
    <>
      <Header>
        <h2>Lista de Viagens</h2>
      </Header>
      <Main>
        <h3>Viagens disponíveis</h3>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro.</p>}
        {!isLoading && tripsList.trips && tripsList.trips.length > 0 && allTrips }
        {!isLoading && tripsList && tripsList.length === 0 && (<p>Não há viagens disponíveis no momento, tente novamente mais tarde.</p>)}
        <br />
        <Button onClick={() => goToHomePage(navigate)}>Home</Button>
      </Main>
      <Footer>
        <p>All rights reserved © 2022</p>
      </Footer>
    </>
  )
}

export default ListTripsPage