import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToListTripsPage } from '../routes/Coordinator'

const Header = styled.div`
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
    text-align: center;
    background-color:#EEE9E9;
    color: black;
    border: 1px solid black;
    padding: 120px 0px 120px 0px;
    font-size: 18px;
  }
  display: grid;
  justify-items: center;
  background-color:#EEE9E9;
  color: black;
  border: 1px solid black;
  padding: 130px 0px 130px 0px;
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

const Button = styled.button`
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    padding:20px 70px 20px 70px;
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
    background-color: #4169E1;
    color:black;
  }
`

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header>
        <h2>Home Page</h2>
      </Header>
      <Main>
        <h3>Bem vindo ao melhor site de viagens espaciais!</h3>
        <h3>Escolha uma opção para começar:</h3>
        <br />
        <Button onClick={() => goToListTripsPage(navigate)}>Lista de Viagens</Button>
        <Button onClick={() => goToAdminHomePage(navigate)}>Acesso Administrador</Button>
      </Main>
      <Footer>
        <p>All rights reserved © 2022</p>
      </Footer>
    </>
  )
}

export default HomePage