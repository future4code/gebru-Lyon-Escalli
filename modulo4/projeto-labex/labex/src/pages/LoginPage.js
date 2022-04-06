import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToHomePage } from '../routes/Coordinator'

export const LoginPage = () => {
    const navigate = useNavigate()

    const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const onChangeInputLogin = (event) => {
    const newLogin = event.target.value
    setLogin (newLogin)
  }

  const onChangeInputPassword = (event) => {
    const newPassword = event.target.value
    setPassword (newPassword)
  }

  const loginFunction = () => {
    const mainUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lyon-escalli-gebru"

    const body = {
      email: login,
      password: password
    }

    const header = 'Content-Type: application/json'
  
    axios
        .post(`${mainUrl}/login`, body, header)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToAdminHomePage(navigate)
        })
        .catch((err) => {
          alert("Usuário inválido")
        })
  }

    return (
        <>
         <div>
        <p>ACESSO ADMINISTRADOR</p>
      </div>
      <div>
        <p><b>OLÁ VISITANTE!</b></p>
        <p><b>Efetuar Login:</b></p>
        <label id="login">Informe o seu Email:</label>
        <input 
          type="text" 
          id="Email..."
          value={login}
          onChange={onChangeInputLogin} />
        <label id="password">Informe a sua senha:</label>
        <input 
          type="password" 
          id="password" 
          value={password}
          onChange={onChangeInputPassword}/>
        <br />
        <button onClick={loginFunction}>Efetuar Login</button>
        <br />
          <button onClick={() => goToHomePage(navigate)}>Home</button>
          </div>
        </>
    )
}

export default LoginPage