import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Button = styled.button`
background-color: orange;
color: black;
border: 1px solid black;
border-radius: 10px;
margin: 0px 100px 10px 100px;
`

const headers = 'Content-Type: application/json'

export const Clear = () => {

  const limparMatches = () => {
    axios
    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lyon/clear", headers)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div>
      <Button onClick={limparMatches}><b>Limpar Matches</b></Button>
    </div>
  );
}