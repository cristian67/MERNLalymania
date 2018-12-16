import React, { Component } from 'react';

class Usuario extends Component {
    
    constructor(){
      super();

      this.agregarUsuario = this.agregarUsuario.bind(this);

      this.nombreRef   = React.createRef();
      this.emailRef    = React.createRef();
      this.passwordRef = React.createRef();
    }


    agregarUsuario(e){
      e.preventDefault();

      /*
      console.log(this.nombreRef.current.value);
      console.log(this.emailRef.current.value);
      console.log(this.passwordRef.current.value); */
      
    //crear objeto
    const datosBusqueda = {
        nombre:this.nombreRef.current.value,
        email:this.emailRef.current.value,
        password:this.passwordRef.current.value
        }
     
    //pasarlo a props
    this.props.obtenerEventos(datosBusqueda);
      
     /*
      fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        }
      })
      .then(res => console.log(res))
      .catch(err => console.error(err));
      
      console.log(this.state); */
    
    }

    render() {
        return (
        <div>
    
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

export default Usuario;
