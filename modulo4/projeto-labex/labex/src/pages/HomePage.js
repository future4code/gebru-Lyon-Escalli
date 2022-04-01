import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListTripsPage } from '../routes/Coordinator'
import { goToLoginPage } from '../routes/Coordinator'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <>
          <p>Home Page</p>
          <button onClick={() => goToListTripsPage(navigate)}>Lista de Viagens</button>
          <button onClick={() => goToLoginPage(navigate)}>Acesso Administrador</button>
        </>
    )
}

export default HomePage