//Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToCreateTripPage, goToHomePage, goToTripDetailsPage } from '../routes/Coordinator'

const AdminHomePage = () => {
    const navigate = useNavigate()

    return (
        <>
          <p>Administrador - Home</p>
          <button onClick={() => goToHomePage(navigate)}>Home</button>
          <button onClick={() => goToTripDetailsPage(navigate)}>Detalhes da Viagem</button>
          <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
        </>
    )
}

export default AdminHomePage