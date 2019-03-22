import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Editor from './components/Editor';
import Listado from './components/Listado';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      face: [],
      date: ""
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Your mood calendar</p>
        </header>
        <main>
          <Switch>
            <Route exact path="/" render={() =>
              <Listado />}
            />
            <Route path="/editor" render={() =>
              <Editor />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
