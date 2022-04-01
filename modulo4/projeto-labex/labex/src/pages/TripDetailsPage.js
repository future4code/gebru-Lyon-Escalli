//Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToCreateTripPage } from '../routes/Coordinator'

export const TripDetailsPage = () => {
    const navigate = useNavigate()

    return (
        <>
          <p>Detalhes Candidatos Viagem</p>
          <button onClick={() => goToAdminHomePage(navigate)}>Administrador - Home</button>
          <button onClick={() => goToCreateTripPage(navigate)}>Criar nova viagem</button>
        </>
    )
}

export default TripDetailsPage