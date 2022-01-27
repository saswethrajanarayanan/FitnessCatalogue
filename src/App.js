import './App.css';
import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import Buttons from './Buttons/Buttons';
import Cards from './Cards/Cards';

var axios = require("axios").default;



let temp = [];
var node = false;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false
    };
    this.getWaistExercise = this.getWaistExercise.bind(this);
  }
  getWaistExercise = (event) => {
    let arg = event.target.getAttribute('data-arg');
    console.log("OM SAI RAM");
    var options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/' + arg,
      headers: {
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        'x-rapidapi-key': '4cf8dff21dmsh66fa5bcbd91b09fp14b18ajsne0c6cfe5cb10'
      }
    };
    this.setState({check: true});
    axios.request(options).then(function (response) {
      console.log(response.data[0]["gifUrl"]);
      temp = [];
      for(var i = 0; i < response.data.length; i = i + 1) {
        let entry = {
          "name": response.data[i]["name"],
          "gifURL": response.data[i]["gifUrl"],
          "target": response.data[i]["target"]
        }
        temp.push(entry);
      }
    }).catch(function (error) {
      console.error(error);
    });
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Buttons exercise={this.getWaistExercise} />
        { this.state.check === true ? <Cards routines={temp} /> : null }
      </div>
    );
  }
}

export default App;
