import React, {useState, useEffect} from'react';
import styled from 'styled-components';
import axios from 'axios';
import { hover } from '@testing-library/user-event/dist/hover';

const ContainerPrincipal = styled.div`
display: grid;
border: 1px solid black;
grid-template-columns: 1fr 1fr;
`

const Hr = styled.div`
border: 0px;
border-top: 1px solid gray;
`

const Img = styled.img`
height: 50px;
width: 50px;
margin: 10px 10px 10px 10px;
border-radius: 50%;
`

export const Matches = () => {

  const [matches, setMatches] = useState([])
  const [teste, setTeste] = useState(true)
  

  useEffect(() => {
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lyon/matches")
    .then(response => {
      setMatches(response.data.matches)
      setTeste(!teste)
    })
    .catch(err => {
      console.log(err);
    });
  },[teste])



  const myMatches = matches.map((profile) => {
    return <>
      <Img src={profile.photo}/>
      <p><b>{profile.name}</b></p>
    </>
  })

  return (
    <div>
      <ContainerPrincipal>
        <>
          {myMatches}
        </>
      </ContainerPrincipal> 
    </div>
  )
}