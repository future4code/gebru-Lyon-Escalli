import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import {Principal} from './pages/Principal'
import {Matches} from './pages/Matches'
import { Clear } from './components/Clear';

const Div = styled.div`
background-color:gray;
`

const ContainerPrincipal = styled.div`
display: grid;
background-color: lightgray;
border: 1px solid black;
margin: 5% 30% 5% 30%;
`

const ContainerSecundario = styled.div`
display: grid;
text-align: center;
`

const Hr = styled.div`
border: 0px;
border-top: 1px solid gray;
`
const Button = styled.button`
background-color: lightblue;
color: black;
border: 1px solid black;
border-radius: 10px;
margin: 0px 100px 10px 100px;
`

const App = () => {

  const [exibicao, setExibicao] = useState("Principal")

  const trocarPagina = () => {
    if (exibicao === "Principal") {
      setExibicao("Matches")
    } else {
      setExibicao("Principal") 
    }
  }

  return (
    <Div>
      <ContainerPrincipal>
        <ContainerSecundario>
          <h1> Astromatch </h1>
          <Button onClick={trocarPagina}>Deu Match!</Button>
        </ContainerSecundario>
        <Hr/>
        <>
          {exibicao === "Principal" ? <Principal /> : <Matches />}
        </>
      </ContainerPrincipal> 
      <Clear />
    </Div>
  );
}

export default App;
