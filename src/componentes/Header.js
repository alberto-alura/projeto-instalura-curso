import React, { Component } from 'react';
import Pubsub from 'pubsub-js';

export default class Header extends Component {

    pesquisa(event){
      event.preventDefault();
      fetch(`http://localhost:8080/api/public/fotos/${this.loginPesquisado.value}`)
        .then(response => response.json())
        .then(fotos => {
          Pubsub.publish('timeline',fotos);
        });
    }

    render(){
        return (
        <header className="header container">
          <h1 className="header-logo">
            Instalura
          </h1>

          <form className="header-busca" onSubmit={this.pesquisa.bind(this)}>
            <input type="text" name="search" placeholder="Pesquisa" className="header-busca-campo" ref={input => this.loginPesquisado = input}/>
            <input type="submit" value="Buscar" className="header-busca-submit"/>
          </form>


          <nav>
            <ul className="header-nav">
              <li className="header-nav-item">
                <a href="#">
                  ♡
                  {/*                 ♥ */}
                  {/* Quem deu like nas minhas fotos */}
                </a>
              </li>
            </ul>
          </nav>
        </header>            
        );
    }
}