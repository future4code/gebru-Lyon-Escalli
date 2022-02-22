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
      <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
      <br></br>
      <form> <b>
        <div>
          <label for="conclusão">5. Por que você não terminou um curso de graduação?</label>
          <br></br>
          <input type="text" id="conclusão" />
        </div>
        <br></br>
        <div>
          <label for="complementar">6. Você fez algum curso complementar?</label>
          <br></br>
          <select for="complementar_select">
            <option>Nenhum</option>
            <option>Curso Livre</option>
            <option>Curso Tecnico</option>
        </select>
        </div>
        </b> </form>
        <br></br>
     </MainContainer>

    );
  }
}