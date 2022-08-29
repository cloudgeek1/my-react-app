import React from 'react';
import Posts from "./components/Posts.js";
import "./App.css";
import logo from "./logo.svg";
import {useFlags} from 'launchdarkly-react-client-sdk';

function App() {
  const {colorflag}=useFlags();
  
  return (
    <div className={"App ".concat(colorflag)}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Posts Sharer</h1>
      </header>
      <Posts />
    </div>
  );
}

export default App;
