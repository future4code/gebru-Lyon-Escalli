import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useRequestData } from '../hooks/useRequestData'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/Coordinator'
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

const ApplicationFormPage = () => {
  const navigate = useNavigate()

  const tripId = localStorage.getItem("TripIdApply")
  const tripNameToApply = localStorage.getItem("TripNameApply")
  const [isLoading, setIsLoading] = useState(false)
  const mainUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lyon-escalli-gebru"
  const headerContent = 'Content-Type: application/json'
  const header = {
    headers: {
      contentType: headerContent,
    }
  }

  const [form, onChange, cleanfields] = useForm({name:'', age:'', applicationText:'', profession:'', country:''})
  const [countryList] = useRequestData(`https://raw.githubusercontent.com/juliolvfilho/lista-paises/master/paises-array.json`)

  const prevDefault = (event) => {
    event.preventDefault()
    setIsLoading(true)
    
    axios
    .post(`${mainUrl}/trips/${tripId}/apply`, form, header)
    .then((res) => {
      alert("Candidatura enviada com sucesso!") 
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false)
    })

    cleanfields()
  }

  return (
    <>
      <Header>
        <h2>Cadastrar-se em uma viagem:</h2>
      </Header>
      <Main>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && (
        <>
          <h3><b>Viagem selecionada:</b> {tripNameToApply}</h3>
          <form onSubmit={prevDefault}>
            <label forhtml="name">Nome completo:</label>
            <Input
              name={"name"}
              value={form.name}
              onChange={onChange}
              pattern={"^.{3,}$"}
              title={"O nome deve ter no mínimo 3 caracteres"}
              required
            />
            <label forhtml="age">Idade:</label>
            <Input 
              name={"age"}
              value={form.age}
              onChange={onChange}
              type={"number"}
              min={18}
              required
            />
            <label forhtml="country">País de origem:</label>
            <Select
              placeholder={"country"}
              name={"country"}
              value={form.country}
              onChange={onChange}
              required
              >
                <option value={""} disabled>País de origem</option>
                {countryList && countryList.map((country) => {
                  return <option value={country.nome} key={country.nome}>{country.nome}</option>
                })}
            </Select>
            <label forhtml="profession">Sua profissão:</label>
            <Input 
              name={"profession"}
              value={form.profession}
              onChange={onChange}
              pattern={"^.{10,}$"}
              title={"A profissão deve ter no mínimo 10 caracteres"}
              required
            />
            <label forhtml="applicationText">Porque você deveria ser selecionado para ir nesta viagem?</label>
            <Input 
              name={"applicationText"}
              value={form.applicationText}
              onChange={onChange}
              pattern={"^.{30,}$"}
              title={"O texto deve ter no mínimo 30 caracteres"}
              required
            />
            <br />
            <Button type={"submit"}>Enviar</Button>
          </form>
          <br />
          <br />
          <Button onClick={() => goToHomePage(navigate)}>Home</Button>
        </>
      )}
      </Main>
      <Footer>
        <p>All rights reserved © 2022</p>
      </Footer>
    </>
  )
}

export default ApplicationFormPage