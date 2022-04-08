import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRequestData } from '../hooks/useRequestData'
import { useNavigate } from 'react-router-dom'
import { goToCreateTripPage, goToTripDetailsPage, goToLoginPage, goToHomePage, goToAdminHomePage } from '../routes/Coordinator'

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
    const [tripsList] = useRequestData(`${mainUrl}/trips`, header)
    const [control, setControl] = useState(false)

    useEffect (() => {
      if(token === null) {
        goToLoginPage(navigate)
      }
    },[navigate])

    useEffect (() => {
      
    },[control])

  const getTripDetails = (tripID) => {
    localStorage.removeItem("tripId")
    localStorage.setItem("tripId",tripID)
    goToTripDetailsPage(navigate)
  }

  const allTrips = 
  tripsList.trips && tripsList.trips.map((trip) => {
  return <>
  <li key={trip.id}>
    {trip.name} </li>
    <button onClick={() => getTripDetails(trip.id)}>+</button>
    <button onClick={() => deleteTrip(trip.id)}>Deletar Viagem</button>
  </>
  })


  const deleteTrip = (tripID) => {
    axios
    .delete(`${mainUrl}/trips/${tripID}`, header)
    .then((res) => {
      alert("Viagem apagada com sucesso!")
    })
    .catch((err) => {
        console.log(err);
    })
    setControl(!control)
  }
  
    const goToLogout = () => {
      localStorage.removeItem("token")
      goToLoginPage(navigate)
    }

    return (
        <>
          <p>Administrador - Home</p>
          <p>Detalhes Viagem</p>
          {allTrips}
          <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
          <button onClick={() => goToHomePage(navigate)}>Home</button>
          <button onClick={goToLogout}>Logout</button>
        </>
    )
}

export default AdminHomePage