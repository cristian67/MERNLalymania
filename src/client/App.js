import React, { Component } from 'react';
import Usuario from './Usuario';
import axios from 'axios';

class App extends Component {
    
    constructor(){
      super();

      this.state = {
        nombre: '',
        email: '',
        password: ''
      }

      

      this.obtenerEventos = this.obtenerEventos.bind(this);

    }
    
    
    obtenerEventos(busqueda){

      console.log(busqueda);
      
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
      
      axios.post('/api/user', busqueda, axiosConfig)
           .then(res => console.log(res));
      
    

    }       


    render() {
        return (
        <div>
          {/* Navegacion */}
          <nav className="light-blue darken-4">
              <div className="container">
                <a className="brand-logo" href="/">Lalymania</a>
              </div>
          </nav>

          <div className="container">
              <Usuario 
                 obtenerEventos = {this.obtenerEventos}
              />
          </div>

        </div>

        );
    }
}

export default App;
