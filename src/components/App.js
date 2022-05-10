import './App.css';
import React from 'react';
//import { Navbar, Nav, Container} from 'react-bootstrap';
//import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar/Navbar'
import Navbar2 from './Navbar2/Navbar'

export default class App extends React.Component{
  //Debemos de establecer un token para saber que usuario esta logeado y que al recargar
  //no se nos pierda la sesión
  constructor(props){
    super(props);
    this.state = {
      logged : false,
      email: '',
    }
    this.updateState = this.updateState.bind(this)
  }

  async updateState(logged, email){
    await this.setState({
      logged: logged,
      email: email,
    });
  }

  renderLogin(){
    <div className="App">
      <Navbar />
      <header className="App-header">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>      
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      </header>
    </div>
  }

  renderApp(){
    <div className="App">
      <Navbar2 />
      <header className="App-header">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>      
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      </header>
    </div>
  }

  render() {
    const isLoggedIn = this.state.logged;
    return (
      <div>
        {isLoggedIn
          ? this.renderApp()
          : this.renderLogin()
        }
      </div>
    );
  }
}


