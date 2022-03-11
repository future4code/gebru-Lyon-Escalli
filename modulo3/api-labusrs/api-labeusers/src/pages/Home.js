import React from 'react'
import axios from 'axios'

const users = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const header = {
  headers: {
    Authorization: "lyon-escalli-gebru"
  }
}

export default class App extends React.Component {

  state = {
    name: "",
    email:""
  }

  onChangeInputNewUserName = (event) => {
    const newName = event.target.value
    this.setState({name: newName})
  }

  onChangeInputNewUserEmail = (event) => {
    const newEmail = event.target.value
    this.setState({email: newEmail})
  }

  cadastrarUsuario = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    }

    axios
    .post(users, body, header)
    .then((res) => {
      alert(`Usuário ${body.name} cadastrado com sucesso!`)
      this.setState({name:'', email:''})
    })
    .catch((err) => {
      alert("Erro: favor revisar as informações de cadastro.")
    })
  }

  render() {

    return (
      <>
      <p>Cadastrar Usuário:</p>
      <input
      placeholder="Nome"
      type="text"
      value={this.state.name}
      onChange={this.onChangeInputNewUserName}
      />
      <input
      placeholder="Email"
      type="email"
      value={this.state.email}
      onChange={this.onChangeInputNewUserEmail}
      />
      <button onClick={this.cadastrarUsuario}>Criar Usuário</button>
      <br/>
      <hr/>
      </>
    )
  }
}
