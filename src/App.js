// import './App.css';
// import React, { useState, useEffect, Component } from 'react';
// import * as d3 from 'd3';
// import data from "./data/global_food_prices.csv";

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       data: []
//     };
//   }

//   componentDidMount(){
//     d3.csv(data).then(function(d, error){
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(d);
//       };
//     });
//   }

//   render(){
//     return(
//       <div>{this.state.data}</div>
//     );
//   }
// }

// export default App;

//NOW LET'S USE REACT INSTEAD OF JUST D3 to load in data
import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import { doExpression } from '@babel/types';

const csvUrl =
'https://media.githubusercontent.com/media/MariaC27/data-viz/main/src/data/global_food_prices.csv';

const message = data => {
  let message = '';
  message = message + d3.csvFormat(data).length / 1024 + ' kB\n';
  message = message + data.length + ' rows\n';
  message = message + data.columns.length + ' columns';
  return message; 
};

const App = () => {
  //look, these are states just like useMousePositions
  const [data, setData] = useState(null); //intial data is just null.

  //If we didn't use useEffect, d3.csv(csvUrl).then(setData would run infinitely. that's what the empty array indicates.
  //the then here simply takes the CSV and populated setData with it when it runs. UseEffect makes ir tun only once
  useEffect(() => {
    d3.csv(csvUrl).then(setData);
  }, []);

  return (message(data));
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
