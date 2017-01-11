import React, { Component } from 'react';
import FotoItem from './Foto';

export default class Timeline extends Component {

    constructor(){
      super();
      this.state = {fotos:[]};
    }

    componentDidMount(){
      fetch(`http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`)
       .then(response => response.json())
       .then(fotos => {
         this.setState({fotos:fotos});
       });
    }

    render(){
        return (
        <div className="fotos container">
          {
            this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto}/>)
          }                
        </div>            
        );
    }
}