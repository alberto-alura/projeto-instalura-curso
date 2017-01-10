import React, { Component } from 'react';
import Foto from './Foto';

export default class Timeline extends Component {
    render(){
        return (
        <div className="fotos container">
          <Foto/>
          <Foto/>
        </div>            
        );
    }
}