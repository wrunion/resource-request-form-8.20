import React from 'react';
import './App.css';
import { TITLE, SUB_TITLE, INTRO_PARAGRAPH } from './../constants/CONSTANTS';
import Form from './Form';

const App = () => {
  return (
  <div className="App">
    <h1>{TITLE}</h1>
    {/* <h2>{SUB_TITLE}</h2> */}
    {/* <p>{INTRO_PARAGRAPH}</p> */}
    <Form />
  </div>
  )
}

export default App;
