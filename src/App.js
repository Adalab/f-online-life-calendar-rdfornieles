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
      listFaces:[],
      message:""
    }
    this.handleDateValue = this.handleDateValue.bind(this);
    this.handleFaceValue = this.handleFaceValue.bind(this);
    this.handleTextValue = this.handleTextValue.bind(this);
    this.saveInfoFaces = this.saveInfoFaces.bind(this);
  };

  componentDidMount(){
   this.getSaveData() 
  }

  savedData(data) {
    localStorage.setItem('savedFaces', JSON.stringify(data));
  }

  getSaveData() {
    const userInfo = JSON.parse(localStorage.getItem('savedFaces'));
    if(userInfo !== null) {
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

  handleFaceValue(event){
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

  checkDate() {
    const { listFaces } = this.state;
    for (const date of listFaces) {
      if(this.state.date === date.date){
        return true;
      }
    }
  }

  checkFaces() {
    if (this.state.faces === '') {
      return true
    }
  }


  saveInfoFaces() {
    let { message, faces, date } = this.state;

    const newFacesList = {
      userFaces: faces,
      userDate: date,
      userMessage: message
    };

    if(faces === "sad") {
      message = ""
    }

    if(!this.checkDate() && !this.checkFaces() && !(date === "")){
      this.setState(prevState => ({
        ListFaces: [...prevState.ListFaces, newFacesList]
      }));
      
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
