import React from 'react'
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import styled from 'styled-components'

const MainContainer = styled.div`
display: grid;
align-items: center;
justify-items: center;
`

export default class App extends React.Component {

  state = {
    etapa: 1
  }

  renderizaEtapa = () => {

    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3 />;
      default:
        return <Final />;
    }
  }

  irParaProximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

  render () {

   return (
     <MainContainer>
       {this.renderizaEtapa()}
       <br></br>
       {this.state.etapa <4 && (<button onClick={this.irParaProximaEtapa}>Proxima Etapa</button>)}
     </MainContainer>
    );
  }
}
