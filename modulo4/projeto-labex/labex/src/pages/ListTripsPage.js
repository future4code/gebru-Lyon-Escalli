import React from 'react'
import { useRequestData } from '../hooks/useRequestData'
import { useNavigate } from 'react-router-dom'
import { goToApplicationFormPage, goToHomePage} from '../routes/Coordinator'

const ListTripsPage = () => {
    const navigate = useNavigate()

    const mainUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lyon-escalli-gebru"

    const [tripsList, isLoading, error] = useRequestData(`${mainUrl}/trips`)

   const allTrips = 
    tripsList.trips && tripsList.trips.map((trip) => {
    return <li key={trip.id}>
      <p>Nome da viagem: {trip.name}</p>
      <p>Planeta: {trip.planet}</p>
      <p>Duração: {trip.durationInDays}</p>
      <p>Data: {trip.date}</p>
      <p>Descrição: {trip.description}</p>
      <button onClick={() => applyToTrip(trip.id)}> Candidate-se a esta viagem!</button>
      </li>
  })

  const applyToTrip = (tripID) => {
    localStorage.removeItem("TripIdApply")
    localStorage.setItem("TripIdApply",tripID)
    goToApplicationFormPage(navigate)
  }

    return (
        <>
          <p>Lista de Viagens</p>
          {isLoading && <p>Carregando...</p>}
          {!isLoading && error && <p>Ocorreu um erro.</p>}
          {!isLoading && tripsList.trips && tripsList.trips.length > 0 && allTrips}
          {!isLoading && tripsList && tripsList.length === 0 && (<p>Não há viagens disponíveis no momento, tente novamente mais tarde.</p>)}
          <button onClick={() => goToHomePage(navigate)}>Home</button>
        </>
    )
}

export default ListTripsPage