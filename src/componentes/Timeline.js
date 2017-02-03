import React, { Component } from 'react';
import FotoItem from './Foto';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import TimelineApi from '../logicas/TimelineApi';
import {connect} from 'react-redux';

class Timeline extends Component {

    constructor(props){
      super(props);      
      this.login = this.props.login;      
    }

    carregaFotos(){  
      let urlPerfil;

      if(this.login === undefined) {
        urlPerfil = `http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`;
      } else {
        urlPerfil = `http://localhost:8080/api/public/fotos/${this.login}`;
      } 

      this.props.lista(urlPerfil);                  
    }

    componentDidMount(){
      this.carregaFotos();
    }

    componentWillReceiveProps(nextProps){
      if(nextProps.login !== this.login){          
        this.login = nextProps.login;
        this.carregaFotos();
      }
    }

    render(){
        console.log("render");
        return (
        <div className="fotos container">
        <ReactCSSTransitionGroup
          transitionName="timeline"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            {
              this.props.fotos.map(foto => <FotoItem key={foto.id} foto={foto} like={this.props.like} comenta={this.props.comenta}/>)
            }               
        </ReactCSSTransitionGroup>        
 
        </div>            
        );
    }
}

const mapStateToProps = state => {
  return {fotos : state.timeline}
};

const mapDispatchToProps = dispatch => {
  return {
    like : (fotoId) => {
      dispatch(TimelineApi.like(fotoId));
    },
    comenta : (fotoId,textoComentario) => {
      dispatch(TimelineApi.comenta(fotoId,textoComentario))
    },
    lista : (urlPerfil) => {
      dispatch(TimelineApi.lista(urlPerfil));      
    }

  }
}

const TimelineContainer = connect(mapStateToProps,mapDispatchToProps)(Timeline);

export default TimelineContainer