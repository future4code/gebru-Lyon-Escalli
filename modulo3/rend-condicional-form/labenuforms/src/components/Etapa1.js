import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
display: grid;
align-items: center;
justify-items: center;
`

export default class Etapa1 extends React.Component {

  render () {

   return (
     <MainContainer>
      <h1>ETAPA 1 - DADOS GERAIS</h1>
      <br></br>
      <form> <b>
        <div>
          <label for="nome">1. Qual o seu nome?</label>
          <br></br>
          <input type="text" id="nome" />
        </div>
        <br></br>
        <div>
          <label for="idade">2. Qual sua idade?</label>
          <br></br>
          <input type="text" id="idade" />
        </div>
        <br></br>
        <div>
          <label for="email">3. Qual seu email?</label>
          <br></br>
          <input type="email" id="email" />
        </div>
        <br></br>
        <div>
          <label for="escolaridade">4. Qual a sua escolaridade?</label>
          <br></br>
          <select for="escolaridade_select">
            <option>Ensino medio incompleto</option>
            <option>Ensino medio completo</option>
            <option>Ensino superior incompleto</option>
            <option>Ensino superior completo</option>
        </select>
        </div>
        </b> </form>
        <br></br>
     </MainContainer>

    );
  }
}
