import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import App from './App';
import Login from './componentes/Login';
import Logout from './componentes/Logout';
import {Router,Route,browserHistory} from 'react-router';
import {matchPattern} from 'react-router/lib/PatternUtils';

function verificaAutenticacao(nextState,replace) {
  const resultado = matchPattern('/timeline(/:login)',nextState.location.pathname);
  const enderecoPrivadoTimeline = resultado.paramValues[0] === undefined;
  
  if(enderecoPrivadoTimeline && localStorage.getItem('auth-token') === null){
    replace('/?msg=você precisa estar logado para acessar o endereço');
  }
}


ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Login}/>
      <Route path="/timeline(/:login)" component={App} onEnter={verificaAutenticacao}/>      
      <Route path="/logout" component={Logout}/>
    </Router>
  ),
  document.getElementById('root')
);
