import React from 'react';
import './App.css';

function App(props) {
  return <div>Hello World from {props.name} at age = {props.age}</div>;
}

export default App;