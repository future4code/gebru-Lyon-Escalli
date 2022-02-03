import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/id/20/50/50'}
          fotoPost={'https://picsum.photos/id/237/200/150'}
        />
        <Post
          nomeUsuario={'mariazinha'}
          fotoUsuario={'https://picsum.photos/id/40/50/50'}
          fotoPost={'https://picsum.photos/id/100/200/150'}
        />
        <Post
          nomeUsuario={'joãosinho'}
          fotoUsuario={'https://picsum.photos/id/30/50/50'}
          fotoPost={'https://picsum.photos/id/200/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
