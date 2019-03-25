import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Editor from './components/Editor';
import Listado from './components/Listado';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faces: "",
      date: "",
      listFaces: [],
      message: ""
    }
    this.handleDateValue = this.handleDateValue.bind(this);
    this.handleFaceValue = this.handleFaceValue.bind(this);
    this.handleTextValue = this.handleTextValue.bind(this);
    this.saveInfoFaces = this.saveInfoFaces.bind(this);
  };

  componentDidMount() {
    this.getSaveData()
  }


  savedData(data) {
    localStorage.setItem('localList', JSON.stringify(data));
  }

  getSaveData() {
    const userInfo = JSON.parse(localStorage.getItem('localList'));
    if (userInfo !== null) {
      return (
        this.setState({
          listFaces: userInfo
        })
      )
    }
  }


  handleDateValue(event) {
    const userDate = event.currentTarget.value;
    console.log("userDate", userDate);
    this.setState({
      date: userDate
    })
  }

  handleFaceValue(event) {
    const userFace = event.currentTarget.value;
    console.log("userFace", userFace);
    this.setState({
      faces: userFace
    });

  }

  handleTextValue(event) {
    const userText = event.currentTarget.value;
    this.setState({
      message: userText
    })
  }

  componentDidUpdate() {
    this.savedData(this.state.listFaces);
  }

  saveInfoFaces(event) {
    event.preventDefault();

    let { message, faces, date } = this.state;
    console.log("titi", message, faces, date)

    const newFacesList = {
      userFaces: faces,
      userDate: date,
      userMessage: message
    };
    console.log("new", newFacesList)

    if (newFacesList.userFaces !== "" && newFacesList.userDate !== "" && newFacesList.userMessage !== "") {
      return (
        this.setState(prevState => ({
          listFaces: [...prevState.listFaces, newFacesList]
        }))
      );
    }
  }


  render() {
    console.log("hola", this.state.listFaces)
    return (
      <div className="App">
        <header className="App-header">
          <p>Your mood calendar</p>
        </header>
        <main>
          <Switch>
            <Route exact path="/" render={() =>
              <Listado
                listFaces={this.state.listFaces}
              />}
            />
            <Route path="/editor" render={() =>
              <Editor
                changeDate={this.handleDateValue}
                changeFace={this.handleFaceValue}
                saveInfo={this.saveInfoFaces}
                message={this.handleTextValue}
                messageValue={this.state.message}
                faces={this.state.faces}
                date={this.state.date}
              />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
