import React from 'react'
import Home from './pages/Home'
import Users from './pages/Users'

export default class App extends React.Component {
 state = {
   paginaEmExibicao: "Home"
 }

 trocarPagina = () => {
   if (this.state.paginaEmExibicao === "Home") {
     this.setState({paginaEmExibicao: "Users"})
   } else {
     this.setState ({paginaEmExibicao: "Home"})
   }
 }

  render() {

    return (
      <>
      <button onClick={this.trocarPagina}>Trocar de Página</button>
      {this.state.paginaEmExibicao === "Home" ? <Home /> : <Users />}
      </>
    )
  }
}
