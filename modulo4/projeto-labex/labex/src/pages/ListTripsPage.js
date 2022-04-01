//Para vermos todas as viagens

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToApplicationFormPage, goToHomePage} from '../routes/Coordinator'

const ListTripsPage = () => {
    const navigate = useNavigate()

    return (
        <>
          <p>Lista de Viagens</p>
          <button onClick={() => goToHomePage(navigate)}>Home</button>
          <button onClick={() => goToApplicationFormPage(navigate)}>Cadastrar em nova viagem</button>
        </>
    )
}

export default ListTripsPage