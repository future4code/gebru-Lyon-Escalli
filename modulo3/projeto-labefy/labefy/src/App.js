import React from 'react'
import AddLista from './components/AddLista'
import GetPlaylists from './components/GetPlaylists'
import styled from 'styled-components'

const ContainerPrimeiro = styled.div`
background-color: #4F4F4F;
color: white;
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 1fr 5fr;
align-items: top;
padding: 20px 0px 0px 20px;
`

const ImgLabefy = styled.img`
 height: 40px;
 width: 40px;
`
const Footer = styled.div`
 display: flex;
 justify-content:center;
 align-items: center;
`

const Button = styled.button`
 background-color: #4F4F4F;
 color: white;
 border-radius: 10px;
 padding: 5px 15px 7px 15px;
 margin: 15px 15px 15px 15px;
`

const ContainerSegundo = styled.div`
display: grid;
background-color: orange;
color: black;
grid-template-rows: 1fr;
grid-template-columns: 1fr;
justify-items: center;
align-items: top;
font-size: 13px;
`
const ContainerTerceiro = styled.div`
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 1fr;
justify-content: center;
text-align: center;
column-gap: 10px;
row-gap: 10px;
padding: 0px 0px 0px 0px;
`

export default class App extends React.Component {


  render() {

    return (
      <ContainerPrimeiro>
        <header>
          <h1>{<ImgLabefy src={"https://d1fdloi71mui9q.cloudfront.net/b6TXwI3TguktiUYKx5cw_p0XoT5v9gMkTJLeB"} alt={'Simbolo da Labenu'}/>} Labefy</h1>
          <b>
          <p>Início</p>
          <p>Buscar</p>
          <p>Sobre nós</p>
          </b>
        </header>
        <ContainerSegundo>
          <p>VIP PASS | SUPORTE | CADASTRE-SE | {<Button>LOGUIN</Button>}</p>
          <ContainerTerceiro>
            <AddLista />
            <GetPlaylists />
          </ContainerTerceiro>
        </ContainerSegundo>
        <Footer>
          <p>All Copyrights Reserved ©</p>
        </Footer>
      </ContainerPrimeiro>
    )
  }
}
