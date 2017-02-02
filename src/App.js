import React, { Component } from 'react';
import Header from './componentes/Header';
import Timeline from './componentes/Timeline';
import TimelineStore from './logicas/TimelineStore'

const timelineStore = new TimelineStore([]);

class App extends Component {
  render() {    
    return (
    <div id="root">
      <div className="main">
        <Header/>
        <Timeline login={this.props.params.login} store={timelineStore}/>
      </div>
    </div>
    );
  }
}

export default App;
