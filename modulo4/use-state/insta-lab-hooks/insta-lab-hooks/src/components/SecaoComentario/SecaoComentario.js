import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {

	const [valorComentario, setValorComentario] = useState("")

	const onChangeComentario = (event) => {
		setValorComentario(event.target.value)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={valorComentario}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario(valorComentario) }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario