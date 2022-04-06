import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToListTripsPage } from '../routes/Coordinator'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <>
          <p>Home Page</p>
          <button onClick={() => goToListTripsPage(navigate)}>Lista de Viagens</button>
          <button onClick={() => goToAdminHomePage(navigate)}>Acesso Administrador</button>
        </>
    )
}

export default HomePage