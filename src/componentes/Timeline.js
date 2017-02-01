import React, { Component } from 'react';
import FotoItem from './Foto';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import LogicaTimeline from '../logicas/LogicaTimeline'

export default class Timeline extends Component {

    constructor(props){
      super(props);
      this.state = {fotos:[]};
      this.login = this.props.login;
      this.logicaTimeline = new LogicaTimeline([]);
    }

    componentWillMount(){
      this.logicaTimeline.subscribe(fotos => {
        this.setState({fotos});
      })
    }

    carregaFotos(){  
      let urlPerfil;

      if(this.login === undefined) {
        urlPerfil = `http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`;
      } else {
        urlPerfil = `http://localhost:8080/api/public/fotos/${this.login}`;
      }
      this.logicaTimeline.lista(urlPerfil);
    }

    componentDidMount(){
      this.carregaFotos();
    }

    componentWillReceiveProps(nextProps){
      if(nextProps.login !== undefined){
        this.login = nextProps.login;
        this.carregaFotos();
      }
    }

    like(fotoId) {
      this.logicaTimeline.like(fotoId);
    }

    comenta(fotoId,textoComentario) {
      this.logicaTimeline.comenta(fotoId,textoComentario);
    }

    render(){
        return (
        <div className="fotos container">
        <ReactCSSTransitionGroup
          transitionName="timeline"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            {
              this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto} like={this.like.bind(this)} comenta={this.comenta.bind(this)}/>)
            }               
        </ReactCSSTransitionGroup>        
 
        </div>            
        );
    }
}