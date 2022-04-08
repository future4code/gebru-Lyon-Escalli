import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToHomePage } from '../routes/Coordinator'

const Header = styled.div`
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: grid;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    background-color:#191970;
    border: 1px solid black;
    color:white;
    font-size: 14px
  }
  display: grid;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  background-color:#191970;
  border: 1px solid black;
  color:white;
  padding: 0px 0px 0px 15px;
`

const Main = styled.div`
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: grid;
    justify-items: center;
    row-gap: 5px;
    background-color:#87CEEB;
    color: black;
    border: 1px solid black;
    font-size: 20px
  }
  display: grid;
  justify-items: center;
  row-gap: 5px;
  background-color:#87CEEB;
  color: black;
  border: 1px solid black;
  padding: 10px 10px 10px 10px;
`

const Footer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  background-color:#191970;
  border: 1px solid black;
  color:white;
  padding: 0px 0px 0px 15px;
`

const Input = styled.input`
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: grid;
    justify-items: center;
    align-items: center;
    padding: 15px 50px 15px 50px;
    background-color:white;
    border-radius: 5px;
    font-size: 14px
  }
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
  background-color:white;
  border-radius: 5px;
`

const Button = styled.button`
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    padding:10px 70px 20px 70px;
    margin-bottom: 10px;
    background-color:#191970;
    border: 1px solid black;
    color:white;
    border-radius: 5px;
    font-size: 16px;
  }
  padding: 10px 50px 10px 50px;
  margin-bottom: 10px;
  background-color:#191970;
  border: 1px solid black;
  color:white;
  border-radius: 5px;
  &:hover {
    background-color: #EEE9E9;
    color:black;
  }
`

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
      <Header>
        <h2>ACESSO ADMINISTRADOR</h2>
      </Header>
      <Main>
        <h3>OLÁ VISITANTE!</h3>
        <p><b>Efetuar Login:</b></p>
        <label id="login">Informe o seu Email:</label>
        <Input 
          type="email" 
          id="Email..."
          value={login}
          onChange={onChangeInputLogin} 
          required
        />
        <label id="password">Informe a sua senha:</label>
        <Input 
          type="password" 
          id="password" 
          value={password}
          onChange={onChangeInputPassword}
          required
        />
        <br />
        <Button onClick={loginFunction}>Efetuar Login</Button>
        <br />
        <Button onClick={() => goToHomePage(navigate)}>Home</Button>
      </Main>
      <Footer>
        <p>All rights reserved © 2022</p>
      </Footer>
    </>
  )
}

export default LoginPage