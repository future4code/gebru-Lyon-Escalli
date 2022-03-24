import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ContainerPrincipal = styled.div`
display: grid;
border: 1px solid black;
text-align: center;
`

const Img = styled.img`
width: 100%;
height: 100%;
border-radius: 15%;
margin: 5px 0px 5px 0px;
`

const ButtonLike = styled.button`
background-color: green;
color: black;
border: 1px solid black;
border-radius: 10px;
margin: 0px 100px 10px 100px;
`

const ButtonDislike = styled.button`
background-color: red;
color: black;
border: 1px solid black;
border-radius: 10px;
margin: 0px 100px 10px 100px;
`

const headers = 'Content-Type: application/json'

export const Principal = () => {

  const [perfilNaoVisto, setPerfilNaoVisto] = useState([])
  const [teste, setTeste] = useState(true)

  useEffect(() => {
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lyon/person")
    .then(response => {
      setPerfilNaoVisto(response.data.profile)
      console.log(perfilNaoVisto)
    })
    .catch(err => {
      console.log(err);
    });
  },[teste])


  const like = (idNumber) => {

    const body = {
      id: idNumber,
      choice: true
    }
  
    axios
    .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lyon/choose-person", body, headers)
    .then(response => {
      setTeste(!teste)
    })
    .catch(err => {
      console.log(err);
    });
  }
    
  const dislike = (idNumber) => {
  
    const body = {
      id: idNumber,
      choice: false
    }
  
    axios
    .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lyon/choose-person", body, headers)
    .then(response => {
      setTeste(!teste)
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div>
      <ContainerPrincipal>
        <>
          <Img src={perfilNaoVisto.photo}/>
          <p> <b> {perfilNaoVisto.name}, {perfilNaoVisto.age} </b></p>
          <p> <b> {perfilNaoVisto.bio} </b></p>
          <ButtonLike onClick={() => like(perfilNaoVisto.id)}> <b> Like </b></ButtonLike>
          <ButtonDislike onClick={() => dislike(perfilNaoVisto.id)}> <b> Dislike </b></ButtonDislike>
        </>
      </ContainerPrincipal> 
    </div>
  );
}
