import './App.css';
import React, { useState, useEffect, Component } from 'react';
import * as d3 from 'd3';
import data from "./data/global_food_prices.csv";

class App extends Component{
  constructor(props){
    super(props);
    this.state={};
  }

  componentDidMount(){
    d3.csv(data).then(function(d, error){
      if (error) {
        console.log(error);
      } else {
        console.log(d);
      };
    });
  }

  render(){
    return(
      <div>test</div>
    );
  }
}

export default App;