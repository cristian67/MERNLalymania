import React, { Component } from 'react';

class App extends Component {
    
    constructor(){
      super();

      this.state = {
        nombre: '',
        email: '',
        password: ''
      }

      this.agregarUsuario = this.agregarUsuario.bind(this);

      this.nombreRef   = React.createRef();
      this.emailRef    = React.createRef();
      this.passwordRef = React.createRef();

    }


    agregarUsuario(e){
      e.preventDefault();
      console.log("agregando usuario");

      console.log(this.nombreRef.current.value);
      console.log(this.emailRef.current.value);
      console.log(this.passwordRef.current.value);
      
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
            <div className="row">
              <div className="col s5">
                  <div className="card">
                    <div className="card-content">
                      <form onSubmit={this.agregarUsuario}>
                        
                        <div className="row">
                            <div className="input-field col s12">
                                <input ref={this.nombreRef} type="text" placeholder="Nombre" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input ref={this.emailRef} type="text" placeholder="E-mail" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input ref={this.passwordRef} type="text" placeholder="Password" />
                            </div>
                        </div>

                        <button type="submit" className="btn light-blue darken-4">Send</button>
                      </form>
                    </div>
                  </div>
              </div>
              <div className="col s7">
              </div>
            </div>
          </div>

        </div>

        );
    }
}

export default App;
