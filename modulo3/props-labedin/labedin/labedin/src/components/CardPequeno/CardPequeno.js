import React from 'react'
import styled from 'styled-components'

const ContainerPrincipal = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const ContainerSecundario = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardPequeno (props) {
    return (
        <ContainerPrincipal>
            <Imagem src= { props.imagem } />
            <ContainerSecundario>
                <p>{ props.email }</p>
                <p>{ props.endereco }</p>
            </ContainerSecundario>
        </ContainerPrincipal>
    )
}

export default CardPequeno