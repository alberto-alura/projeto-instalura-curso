import React, { Component } from 'react';
import FotoItem from './Foto';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

export default class Timeline extends Component {

    constructor(props){
      super(props);
      this.state = {fotos:[]};
      this.login = this.props.login;      
    }

    componentWillMount(){
      this.props.store.subscribe(() => {
        this.setState({fotos:this.props.store.getState()});
      })
    }

    carregaFotos(){  
      let urlPerfil;

      if(this.login === undefined) {
        urlPerfil = `http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`;
      } else {
        urlPerfil = `http://localhost:8080/api/public/fotos/${this.login}`;
      } 
      const listaFixa = [{"urlPerfil":"https://instagram.fcgh10-1.fna.fbcdn.net/t51.2885-19/11199408_569104449895751_1837574990_a.jpg","loginUsuario":"alots","horario":"05/12/2016 16:21","urlFoto":"https://instagram.fcgh10-1.fna.fbcdn.net/t51.2885-15/e35/14482111_1635089460122802_8984023070045896704_n.jpg?ig_cache_key=MTM1MzEzNjM4NzAxMjIwODUyMw%3D%3D.2","id":1,"likeada":false,"likers":[],"comentarios":[],"comentario":"comentario da foto"},{"urlPerfil":"https://instagram.fcgh10-1.fna.fbcdn.net/t51.2885-19/11199408_569104449895751_1837574990_a.jpg","loginUsuario":"alots","horario":"05/12/2016 16:21","urlFoto":"https://instagram.fcgh9-1.fna.fbcdn.net/t51.2885-15/e35/15276770_381074615568085_8052939980646907904_n.jpg?ig_cache_key=MTM5ODY4MDMyNjYyMDA1MDE4OQ%3D%3D.2","id":2,"likeada":false,"likers":[],"comentarios":[],"comentario":"comentario da foto"}];     

      this.props.store.dispatch({type:'LISTAGEM',fotos:listaFixa});      
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
      this.props.store.like(fotoId);
    }

    comenta(fotoId,textoComentario) {
      this.props.store.comenta(fotoId,textoComentario);
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