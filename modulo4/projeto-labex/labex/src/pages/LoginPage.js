//Para fazermos login como administrador

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToHomePage } from '../routes/Coordinator'

export const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <>
          <p>Login Administrador</p>
          <button onClick={() => goToAdminHomePage(navigate)}>Administrador - Home</button>
          <button onClick={() => goToHomePage(navigate)}>Home</button>
        </>
    )
}

export default LoginPage