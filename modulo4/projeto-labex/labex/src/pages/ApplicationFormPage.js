//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/Coordinator'

const ApplicationFormPage = () => {
    const navigate = useNavigate()

    return (
        <>
          <p>Cadastro para nova viagem</p>
          <button onClick={() => goToHomePage(navigate)}>Home</button>
        </>
    )
}

export default ApplicationFormPage