import React from 'react'
import axios from 'axios'
import AddTrack from './AddTrack'
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

const ContainerSegundo = styled.div`
display: grid;
background-color: lightgrey;
border: 1px solid black;
border-radius: 10px;
align-items: center;
justify-content: center;
margin: 0px 7px 10px 5px;
padding: 0px 0px 15px 0px;
font-size: 20px;
`

const ContainerTerceiro = styled.div`
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
`
const ContainerQuarto = styled.div`
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 1fr 1fr 1fr 1fr;
background-color: white;
border: 1px solid black;
border-radius: 5px;
padding: 10px 10px 10px 10px;
`

const ButtonADD = styled.button`
 background-color: #4F4F4F;
 color: white;
 border-radius: 10px;
 padding: 5px 15px 7px 15px;
 margin: 10px 10px 0px 10px;
`

const ButtonDELETE = styled.button`
 background-color: orange;
 color: black;
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

export default class GetPlaylists extends React.Component {

  state = {
    listaPlaylists: [],
    listaAtt: [],
    listaTracks: [],
    namePlaylist: [],
    playlistID:[],
  }

  componentDidMount () {
    this.getPlaylists()
  }

  componentDidUpdate (prevProps,prevState) {
    if (prevState.listaAtt !== this.state.listaPlaylists) {
      this.setState({listaAtt: this.state.listaPlaylists})
    }
  }

  getPlaylists = () => {

    axios
    .get(url, headers)
    .then((response) => {
      this.setState({ listaPlaylists: response.data.result.list })
    })
  }

  deletarPlaylist = (nameID) => {
    if(true) {
      axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${nameID}`, headers)
        .then((response) => {
          alert("Playlist apagada com sucesso!")
          this.getPlaylists()
        })
        .catch((error) => {
          alert("Não foi possível apagar a Playlist")
      })
    }
  }

  FuncoesLista = (musicasID, musicasName) => {
    this.detalhesPlaylistTracks(musicasID);
    this.adicionaPlaylist(musicasID);
    this.setState({playlistID: musicasID});
    this.setState({namePlaylist: musicasName})
  }

  adicionaPlaylist = (musicasID) => {

    return <ContainerSegundo>
      <p> <b>Playlist selecionada:</b> {this.state.namePlaylist}</p>
      <p>Adicione uma música a sua playlist!</p>
      <AddTrack 
        playlistID={this.state.playlistID}
        musicaID={musicasID}
      />
    </ContainerSegundo>
  }

  detalhesPlaylistTracks = (musicasID) => {

  axios
  .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${musicasID}/tracks`, headers)
  .then((response) => {
    this.setState({ 
      listaTracks: response.data.result.tracks,
    })
  })
}

  deletarMusica = (playlist, musica) => {
    if(true) {
      axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist}/tracks/${musica}`, headers)
      .then((response) => {
        alert("Musica apagada com sucesso!")
      })
      .catch((error) => {
        alert("Não foi possível apagar a musica")
      })
    }
  }


  render() {

    const playlistCompleta = this.state.listaAtt.map((musicas)=> {
      return <ContainerTerceiro>
        <li>{musicas.name}</li>
        <ButtonADD onClick={() => this.FuncoesLista(musicas.id, musicas.name)}>Detalhes</ButtonADD>
        <ButtonDELETE onClick={() => this.deletarPlaylist(musicas.id)}>Deletar Playlist</ButtonDELETE>
      </ContainerTerceiro>
    })

    const listaItens = this.state.listaTracks.map((musicas)=> {
      return <ContainerQuarto>
        <li><b>Nome da musica:</b> {musicas.name}</li>
        <li><b>Nome do Artista:</b> {musicas.artist}</li>
        <audio controls> Tocar musica:
          <source src={musicas.url}/>
        </audio>
        <ButtonDELETE onClick={() => this.deletarMusica(this.state.playlistID, musicas.id)}>Deletar Musica</ButtonDELETE>
      </ContainerQuarto>
    })

    return (
      <>
        <ContainerPrimeiro>
          <h3>Minha Playlist</h3>
          <p>{playlistCompleta}</p>
          {listaItens}
        </ContainerPrimeiro>
        {this.adicionaPlaylist()}
      </>
    )
  }
}