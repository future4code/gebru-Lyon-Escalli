import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRequestData } from '../hooks/useRequestData'
import { goToAdminHomePage, goToCreateTripPage, goToLoginPage } from '../routes/Coordinator'

export const TripDetailsPage = () => {
    const navigate = useNavigate()

    const [tripId, setTripId] = useState('')
    const [control, setControl] = useState(false)
    const token = localStorage.getItem("token")
  
    useEffect (() => {
      if(token === null) {
        goToLoginPage(navigate)
      }
    },[navigate])

  

    const mainUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lyon-escalli-gebru"
    const header = {
      Authorization: token
    }

  const [tripsList] = useRequestData(`${mainUrl}/trips`)

  const [tripDetails] = useRequestData(`${mainUrl}/trip/${tripId}`, header)

  const myTripDetails = tripDetails.trip && tripDetails.trip.map ((index) => {
    return <>
    <p>Planeta: {index.planet}</p>
    <p>Duração: {index.durationInDays}</p>
    <p>Data: {index.date}</p>
    <p>Nome: {index.name}</p>
    <p>Descrição: {index.description}</p>
    {tripDetails.trip.candidates.map((index) => {
      return <>
    <p>Nome do Candidato: {index.name}</p>
    <p>Idade: {index.age}</p>
    <p>País: {index.country}</p>
    <p>Profissão: {index.profession}</p>
    <p>Texto de Candidatura: {index.applicationText}</p>
    <button>Aprovar Candidato</button>
    <button>Deletar Candidato</button>
    </>
    })}
    </>
  })

  const getTripDetails = (tripID) => {
    setTripId(tripID)
    setControl(!control)
  }

   const allTrips = 
    tripsList.trips && tripsList.trips.map((trip) => {
    return <li key={trip.id}>
      {trip.name}
      <button onClick={() => getTripDetails(trip.id)}>+</button>
      </li>
  })

    return (
        <>
          <p>Detalhes Candidatos Viagem</p>
          {allTrips}
          {myTripDetails}
          <button onClick={() => goToAdminHomePage(navigate)}>Administrador - Home</button>
          <button onClick={() => goToCreateTripPage(navigate)}>Criar nova viagem</button>
        </>
    )
}

export default TripDetailsPage