import React from 'react'
import axios from 'axios'

const users = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const header = {
  headers: {
    Authorization: "lyon-escalli-gebru"
  }
}

export default class Users extends React.Component {

    state = {
        listaDeUsuarios: [],
        nameID: "",
        name:""
      }

      componentDidMount = () => {
          this.cadastrarUsuario()
      }

      cadastrarUsuario = () => {

        axios
        .get(users, header)
        .then((response) => {
          this.setState({ listaDeUsuarios: response.data })
        })
      }

      deletarUsuario = (usuarioID) => {
          if(true) {
              axios
              .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioID}`, header)
              .then((response) => {
                  alert("Usuário apagado com sucesso!")
                  this.cadastrarUsuario()
              })
              .catch((error) => {
                  alert("Não foi possível apagar o usuário")
            })
          }
      }

      onChangeName = (event) => {
          const newName = event.target.value
          this.setState({name: newName})
      }

      filtrarNome = () => {
          axios
          .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.name}&email=`, header)
          .then((response) => {
              this.setState({listaDeUsuarios: response.data})
          })
      }

  render() {

    const listaUsers = this.state.listaDeUsuarios.map((users) => {
        return <>
        <li>{users.name}</li>
        <button onClick={() => this.deletarUsuario(users.id)}>Deletar</button>
        </>
    })

    return (
    <>
      <p>Nome do usuário: {listaUsers}</p>
      <hr/>
      <p>Procurar usuário</p>
      <input 
      placeholder="Nome exato para busca"
      type="text"
      value={this.state.name}
      onChange={this.onChangeName}
      />
      <button onClick={this.filtrarNome}>Buscar</button>
    </>
    )
  }
}
