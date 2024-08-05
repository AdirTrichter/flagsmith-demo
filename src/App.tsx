import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useFlags} from "flagsmith/react";

function App() {
  const data = useFlags(['villages-list', "login"])

  const value = data["villages-list"].value
  const enabled = data.login.enabled

  return (
    <div className="App">
      enabled:{enabled? " true":" false"}
        <br/>
      value: {value}
    </div>
  );
}

export default App;
