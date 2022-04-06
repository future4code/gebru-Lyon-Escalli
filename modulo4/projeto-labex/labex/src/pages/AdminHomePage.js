import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToCreateTripPage, goToTripDetailsPage, goToLoginPage, goToHomePage } from '../routes/Coordinator'

const AdminHomePage = () => {
    const navigate = useNavigate()

    const token = localStorage.getItem("token")
  
    useEffect (() => {
      if(token === null) {
        goToLoginPage(navigate)
      }
    },[navigate])
  
    const goToLogout = () => {
      localStorage.removeItem("token")
      goToLoginPage(navigate)
    }

    return (
        <>
          <p>Administrador - Home</p>
          <button onClick={() => goToTripDetailsPage(navigate)}>Detalhes da Viagem</button>
          <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
          <button onClick={() => goToHomePage(navigate)}>Home</button>
          <button onClick={goToLogout}>Logout</button>
        </>
    )
}

export default AdminHomePage