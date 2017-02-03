import React, { Component } from 'react';
import TimelineApi from '../logicas/TimelineApi';

export default class Header extends Component {

    constructor(){
      super();
      this.state = {msg:''};
    }

    componentDidMount(){
      this.props.store.subscribe(() => {
        this.setState({msg:this.props.store.getState().notificacao});
      });
    }

    pesquisa(event){
      event.preventDefault();
      this.props.store.dispatch(TimelineApi.pesquisa(this.loginPesquisado.value));
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
                <span>{this.state.msg}</span>
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