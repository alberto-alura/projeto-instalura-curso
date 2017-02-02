import React, { Component } from 'react';
import Header from './componentes/Header';
import Timeline from './componentes/Timeline';
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {timeline} from './reducers/timeline';

const store = createStore(timeline,applyMiddleware(thunkMiddleware));

class App extends Component {
  render() {    
    return (
    <div id="root">
      <div className="main">
        <Header/>
        <Timeline login={this.props.params.login} store={store}/>
      </div>
    </div>
    );
  }
}

export default App;
