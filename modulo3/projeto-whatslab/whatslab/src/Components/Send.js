import React from 'react'
import styled from 'styled-components'

const Imput = styled.div`
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 100px 5fr 1fr;
justify-content: center;
`
const ImputContainer = styled.input`
`

export class Send extends React.Component {

    state = {
        valueUser: '',
        valueMessage: '',
    }

    onChangeUser = (event) => {
        this.setState({
			valueUser: event.target.value,
		})
    }

    onChangeMessage = (event) => {
        this.setState({
			valueMessage: event.target.value,
		})
    }

    onClickButton = () => {
        const message = {
            InputUsuario: this.state.valueUser,
            InputMensagem: this.state.valueMessage
        }

        this.props.sendMessage(message)

        this.setState ({
            valueUser: '',
            valueMessage:'',
        })
    }

    render () {
        
        return <>
        <Imput>
            <ImputContainer
                placeholder={'Usuário'}
                onChange={this.onChangeUser}
                value={this.state.valueUser}
            />
            <ImputContainer
                placeholder={'Mensagem'}
                onChange={this.onChangeMessage}
                value={this.state.valueMessage}
            />

            <button onClick={this.onClickButton}>Enviar</button>
        </Imput>
        </>
        
    }

}






