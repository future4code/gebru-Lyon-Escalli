import React from 'react'
import styled from 'styled-components'
import { Send } from './Components/Send'

const MainBox = styled.div `
border: 1px solid black;
max-width:500px;
height:100vh;
margin:0px 250px 0px 250px;
display: grid;
align-items: end;
`
const TextBox = styled.div `
display: grid;
align-items: end;
`

export default class App extends React.Component {
    state = {
        mensagens: []
    } 

    sendMessage = (message) => {
        this.setState ({
            mensagens: [...this.state.mensagens, message]
        })
    }


    render () {

        return (
            <MainBox>
              <TextBox>
                {
                    this.state.mensagens.map((item, index) => <p key={index}><b>{item.InputUsuario}</b>{': ' + item.InputMensagem}</p>)
                }
              </TextBox>
            <Send sendMessage={this.sendMessage}/>
            </MainBox>
        )
    }

}
 
