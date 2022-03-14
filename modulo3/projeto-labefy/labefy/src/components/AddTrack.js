import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerPrimeiro = styled.div`
display: grid;
background-color: white;
border: 1px solid black;
border-radius: 10px;
align-items: center;
justify-content: center;
margin: 0px 7px 0px 5px;
padding: 5px 5px 15px 5px;
font-size: 20px;
`

const Button = styled.button`
 background-color: #4F4F4F;
 color: white;
 border-radius: 10px;
 padding: 5px 15px 7px 15px;
 margin: 10px 10px 0px 10px;
`

const headers = {
    headers: {
      Authorization: "lyon-escalli-gebru"
    }
  }

export default class AddTrack extends React.Component {

  state = {
    name: "",
    artist: "",
    url: ""
  }


  onChangeInputNewName = (event) => {
    const newName = event.target.value
    this.setState ({name: newName})
  }

  onChangeInputNewArtist = (event) => {
    const newArtist = event.target.value
    this.setState ({artist: newArtist})
  }

  onChangeInputNewUrl = (event) => {
    const newUrl = event.target.value
    this.setState ({url: newUrl})
  }

  cadastrarMusica = (id) => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url
    }

    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, headers)
    .then((response) => {
      alert(`A musica ${body.name} foi cadastrada com sucesso!`)
      this.setState({
        name:'',
        artist:'',
        url:''
      })
    })
    .catch((error) => {
      alert("Erro: favor revisar as informações de cadastro.")
    })
  }

  render() {

    return (
      <ContainerPrimeiro>

        <p><b>Cadastrar Nova Musica:</b></p>
        <input
          placeholder="Nome da playlist"
          type="text"
          value={this.state.name}
          onChange={this.onChangeInputNewName}
        />
        <input
          placeholder="Nome do artista"
          type="text"
          value={this.state.artist}
          onChange={this.onChangeInputNewArtist}
        />
        <input
          placeholder="Link da musica"
          type="text"
          value={this.state.url}
          onChange={this.onChangeInputNewUrl}
        />
        <Button onClick={() => this.cadastrarMusica(this.props.playlistID)}>Enviar</Button>

      </ContainerPrimeiro>

      
    )
  }
}