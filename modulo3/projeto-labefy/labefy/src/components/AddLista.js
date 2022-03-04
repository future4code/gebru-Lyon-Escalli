import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerPrimeiro = styled.div`
display: grid;
background-color: lightgrey;
border: 1px solid black;
border-radius: 10px;
align-items: center;
justify-content: center;
margin: 0px 7px 0px 5px;
padding: 0px 0px 15px 0px;
font-size: 16px;
`
const Button = styled.button`
 background-color: #4F4F4F;
 color: white;
 border-radius: 10px;
 padding: 5px 15px 7px 15px;
 margin: 10px 10px 0px 10px;
`

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
    headers: {
      Authorization: "lyon-escalli-gebru"
    }
  }

export default class AddLista extends React.Component {

  state = {
    name: ""
  }


  onChangeInputNewPlaylistName = (event) => {
    const newPlaylistName = event.target.value
    this.setState ({name: newPlaylistName})
  }

  cadastrarPlaylist = () => {
    const body = {
      name: this.state.name
    }

    axios
    .post(url, body, headers)
    .then((response) => {
      alert(`A playlist ${body.name} foi cadastrada com sucesso!`)
      this.setState({name:''})
    })
    .catch((error) => {
      alert("Erro: favor revisar as informações de cadastro / Playlist já existente.")
    })
  }


  render() {

    return (
      <ContainerPrimeiro>
        <p><b>Cadastrar Nova Playlist:</b></p>
        <input
          placeholder="Nome da playlist"
          type="text"
          value={this.state.name}
          onChange={this.onChangeInputNewPlaylistName}
        />
        <Button onClick={this.cadastrarPlaylist}>Enviar</Button>
      </ContainerPrimeiro>
    )
  }
}