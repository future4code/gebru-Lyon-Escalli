import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin: 20px 20px 20px 20px;
  padding: 10px 10px 10px 10px;
  background-color: lightblue; 
`

class App extends React.Component {

  state = {
    pessoas: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/id/20/50/50",
        fotoPost: "https://picsum.photos/id/237/200/150"
      },
      {
        nomeUsuario: "mariazinha",
        fotoUsuario: "https://picsum.photos/id/40/50/50",
        fotoPost: "https://picsum.photos/id/100/200/150"
      },
      {
        nomeUsuario: "joãozinho",
        fotoUsuario: "https://picsum.photos/id/30/50/50",
        fotoPost: "https://picsum.photos/id/200/200/150"
      }
    ],

    valorInputUsuario:'',
    valorInputFotoUsuario:'',
    valorInputFotoPost:''
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const newPost = [...this.state.pessoas, novoPost];

    this.setState({
      pessoas: newPost,
      valorInputUsuario: '',
      valorInputFotoUsuario: '',
      valorInputFotoPost: ''
    });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const meuComponente = this.state.pessoas.map((item,index) => {
      return <Post
          nomeUsuario={item.nomeUsuario}
          fotoUsuario={item.fotoUsuario}
          fotoPost={item.fotoPost}
        />
    })

    return (
      <MainContainer>
        <InputContainer>
          <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuario"}
          />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Link foto usuário"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Link foto post"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </InputContainer>
        <div>{meuComponente}</div>
      </MainContainer>
    );
  }
}

export default App;
