import React, { Component } from 'react';
import Foto from './Foto';

export default class Timeline extends Component {

    componentDidMount(){
      fetch('http://localhost:8080/api/public/fotos/alots');
    }

    render(){
        return (
        <div className="fotos container">
          <Foto/>
          <Foto/>
        </div>            
        );
    }
}