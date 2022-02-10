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
      <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
      <br></br>
      <form> <b>
        <div>
          <label for="curso">5. Qual curso?</label>
          <br></br>
          <input type="text" id="curso" />
        </div>
        <br></br>
        <div>
          <label for="unidade">6. Qual a unidade de ensino?</label>
          <br></br>
          <input type="text" id="idade" />
        </div>
        <br></br>
        </b> </form>
     </MainContainer>

    );
  }
}