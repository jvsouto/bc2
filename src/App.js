import React, { useState } from "react";

import "./styles.css";
import { renderTime } from "./utils";
import CounterA from "./components/CounterA";
import CounterB from "./components/CounterB";

// import Button from 'react-bootstrap/Button';

import './App.css';

import Nav from './components/Nav'

function App() {
  const [children, setChilds] = useState([]);
  const addCounterA = () => {
    const counter = <CounterA />;
    const newChildren = [...children, counter];
    setChilds(newChildren);
  };
  const addCounterB = () => {
    console.log("klik")
    const counter = <CounterB />;
    const newChildren = [...children, counter];
    console.log(newChildren)
    setChilds(newChildren);
  };

  const addManyCounterB = count => {
    
    // const newChildren = [...children];
    // for (let index = 0; index < count; index++) {
    //   newChildren.push(<CounterB />);
    // }
    // setChilds(newChildren);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Home puge</h1>
        <Nav />
      </header>

      <h3>{renderTime()}</h3>
      <button onClick={addCounterA}>Add CounterA component</button>
      <button onClick={addCounterB}>Add CounterB component</button>
      <button onClick={() => addManyCounterB(10000)}>
        Add 10 000 CounterB components
      </button>
      <div className="container">{children}</div>

    </div>
  );
  
}

export default App;
