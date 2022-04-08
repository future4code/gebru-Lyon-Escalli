import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToTripDetailsPage, goToLoginPage } from '../routes/Coordinator'
import { useForm } from '../hooks/useForm'

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

const Select = styled.select`
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: grid;
    justify-items: center;
    align-items: center;
    padding: 15px 5px 15px 5px;
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

const CreateTripPage = () => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const mainUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lyon-escalli-gebru"
  const token = localStorage.getItem("token")
  const headerContent = 'Content-Type: application/json'
  const header = {
    headers: {
      contentType: headerContent,
      auth: token
    }
  }

  useEffect (() => {
    if(token === null) {
      goToLoginPage(navigate)
    }
  },[navigate])


  const [form, onChange, cleanfields] = useForm({name:'', planet:'', date:'', description:'', durationInDays:''})

  const prevDefault = (event) => {
    event.preventDefault()
    setIsLoading(true)

    axios
    .post(`${mainUrl}/trips`, form, header)
    .then((res) => {
      alert("Viagem cadastrada com sucesso!") 
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false)
    })

      cleanfields()
  }

  const planets = [
    "Mercúrio",
    "Vênus",
    "Terra",
    "Marte",
    "Jupiter",
    "Saturno",
    "Urano",
    "Netuno",
    "Plutão"
  ]

  return (
    <>
      <Header>
        <h2>Criar Nova Viagem</h2>
      </Header>
      <Main>
      <br />
      {isLoading && <p>Carregando...</p>}
      {!isLoading && (
        <>
          <form onSubmit={prevDefault}>
          <label forhtml="name">Nome completo:</label>
            <Input 
              name={"name"}
              value={form.name}
              onChange={onChange}
              type={"text"}
              pattern={"^.{5,}$"}
              title={"O nome da viagem deve ter no mínimo 5 caracteres"}
              required
            />
            <label forhtml="name">Planeta:</label>
            <Select
              name={"planet"}
              value={form.planet}
              onChange={onChange}
              required
              >
                <option value={""} disabled>Escolha um Planeta</option>
                {planets.map((planet) => {
                  return <option value={planet} key={planet}>{planet}</option>
                })}
            </Select>
            <label forhtml="name">Data planejada</label>
            <Input 
              name={"date"}
              value={form.date}
              onChange={onChange}
              type={"date"}
              required
            />
            <label forhtml="name">Descrição do evento:</label>
            <Input 
              name={"description"}
              value={form.description}
              onChange={onChange}
              pattern={"^.{30,}$"}
              title={"O nome deve ter no mínimo 30 caracteres"}
              required
            />
            <label forhtml="name">Duração da viagem em dias:</label>
            <Input 
              name={"durationInDays"}
              value={form.durationInDays}
              onChange={onChange}
              type={"number"}
              min={50}
              required
            />
            <br />
            <Button type={"submit"}>Enviar</Button>
          </form>
          <br />
        <Button onClick={() => goToAdminHomePage(navigate)}>Administrador - Home</Button>
        </>
      )}
      </Main>
      <Footer>
        <p>All rights reserved © 2022</p>
      </Footer>
    </>
  )
}

export default CreateTripPage