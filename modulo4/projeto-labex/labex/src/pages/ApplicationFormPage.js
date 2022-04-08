import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/Coordinator'
import { useForm } from '../hooks/useForm'

const ApplicationFormPage = () => {
    const navigate = useNavigate()

const [control, setControl] = useState(false)
const tripId = localStorage.getItem("TripIdApply")
    const [isLoading, setIsLoading] = useState(false)
    const mainUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lyon-escalli-gebru"
    const headerContent = 'Content-Type: application/json'
    const header = {
      headers: {
        contentType: headerContent,
      }
    }

    useEffect (() => {
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
    },[control])

    const [form, onChange, cleanfields] = useForm({name:'', age:'', applicationText:'', profession:'', country:''})

    const prevDefault = (event) => {
      event.preventDefault()
      cleanfields()
    }

    const sendNewCandidate = () => {
    setControl(!control)
    }

    return (
      <>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && (
        <>
        <p>Cadastrar-se em uma viagem:</p>
        <form onSubmit={prevDefault}>
          <label forHtml="name">Nome completo:</label>
          <input 
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Nome do usuário..."
          type="text"
          pattern="^[A-Za-z_]{3,15}{2,20}$"
          required
          />
          <label forHtml="age">Idade:</label>
          <input 
          name="age"
          value={form.age}
          onChange={onChange}
          placeholder="Idade..."
          type="text"
          required
          />
          <label forHtml="country">País de origem:</label>
          <input 
          name="country"
          value={form.country}
          onChange={onChange}
          placeholder="País..."
          type="country"
          required
          />
          <label forHtml="profession">Sua profissão:</label>
          <input 
          name="profession"
          value={form.profession}
          onChange={onChange}
          placeholder="Descrição do evento..."
          type="text"
          pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{93,20}$"
          required
          />
          <label forHtml="applicationText">Porque você deveria ser selecionado para ir nesta viagem</label>
          <input 
          name="applicationText"
          value={form.applicationText}
          onChange={onChange}
          type="text"
          pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{29,100}$"
          required
          />
          <button onClick={sendNewCandidate}>Enviar</button>
        </form>
        <button onClick={() => goToHomePage(navigate)}>Home</button>
        </>
      )}
    </>
    )
}

export default ApplicationFormPage