import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToTripDetailsPage, goToLoginPage } from '../routes/Coordinator'
import { useForm } from '../hooks/useForm'

const CreateTripPage = () => {
    const navigate = useNavigate()

    const [control, setControl] = useState(false)
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

    useEffect (() => {
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
    },[control])

    const [form, onChange, cleanfields] = useForm({name:'', planet:'', date:'', description:'', durationInDays:''})

    const prevDefault = (event) => {
      event.preventDefault()
      cleanfields()
    }

    const sendNewTrip = () => {
    setControl(!control)
    }
  
    return (
        <>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && (
          <>
          <p>Criar Nova Viagem</p>
          <form onSubmit={prevDefault}>
            <input 
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Nome da viagem..."
            type="text"
            />
            <input 
            name="planet"
            value={form.planet}
            onChange={onChange}
            placeholder="Planeta..."
            type="text"
            />
            <input 
            name="date"
            value={form.date}
            onChange={onChange}
            placeholder="Data planejada..."
            type="text"
            />
            <input 
            name="description"
            value={form.description}
            onChange={onChange}
            placeholder="Descrição do evento..."
            type="text"
            />
            <input 
            name="durationInDays"
            value={form.durationInDays}
            onChange={onChange}
            placeholder="Duração em dias..."
            type="text"
            />
            <button onClick={sendNewTrip}>Enviar</button>
          </form>
          <button onClick={() => goToAdminHomePage(navigate)}>Administrador - Home</button>
          <button onClick={() => goToTripDetailsPage(navigate)}>Detalhes da Viagem</button>
          </>
        )}
      </>
    )
}

export default CreateTripPage