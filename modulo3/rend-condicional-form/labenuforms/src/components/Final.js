import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
display: grid;
align-items: center;
justify-items: center;
`

export default class Final extends React.Component {

  render () {

   return (
     <MainContainer>
         <h1>O FORMULARIO ACABOU</h1>
         <br></br>
         <h3>Muito obrigado por participar! Entraremos em contato!</h3>
     </MainContainer>

    );
  }
}
