//Formulário para o administrador criar uma nova viagem

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToTripDetailsPage } from '../routes/Coordinator'

const CreateTripPage = () => {
    const navigate = useNavigate()

    return (
        <>
          <p>Criar Viagem</p>
          <button onClick={() => goToAdminHomePage(navigate)}>Administrador - Home</button>
          <button onClick={() => goToTripDetailsPage(navigate)}>Detalhes da Viagem</button>
        </>
    )
}

export default CreateTripPage