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
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount(){
    return(
      this.setState({
        listFaces: this.getSaveData()
      })
    )
    
  }

  savedData(data) {
    localStorage.setItem('savedFaces', JSON.stringify(data));
    console.log(data);
  }

  getSaveData() {
    const userInfo = localStorage.getItem('savedFaces');
    if(userInfo !== null) {
      return JSON.parse(userInfo);
    } else {
      return (
       []
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
    if(userFace === "happy"){
      this.setState({
        face:":)"
      })
    } else if (userFace === "sad") {
      this.setState({
        face:":("
      })
    }
    
  }

  handleTextValue(event) {
    const userText = event.currentTarget.value;
    this.setState({
      message: userText
    })
  }

  handleSubmit() {
    const { message, faces, date } = this.state;

    const newFacesList = {
      userFaces: faces,
      userDate: date,
      userMessage: message
    };

    this.setState(prevState => ({
      listFaces: prevState.list.concat(newFacesList)
    }))
 
  }
  

  render() {

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
              submitInfo={this.handleSubmit}
              message={this.handleTextValue}
              messageValue={this.state.message}
              />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
