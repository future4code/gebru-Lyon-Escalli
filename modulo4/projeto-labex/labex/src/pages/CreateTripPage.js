//Formulário para o administrador criar uma nova viagem

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToTripDetailsPage, goToLoginPage } from '../routes/Coordinator'

const CreateTripPage = () => {
    const navigate = useNavigate()

    const token = localStorage.getItem("token")
  
    useEffect (() => {
      if(token === null) {
        goToLoginPage(navigate)
      }
    },[navigate])

    return (
        <>
          <p>Criar Viagem</p>
          <button onClick={() => goToAdminHomePage(navigate)}>Administrador - Home</button>
          <button onClick={() => goToTripDetailsPage(navigate)}>Detalhes da Viagem</button>
        </>
    )
}

export default CreateTripPage