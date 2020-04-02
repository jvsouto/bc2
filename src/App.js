import React from 'react';

import Button from 'react-bootstrap/Button';

import './App.css';

let value = "";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => {console.log( "click")}} >Hello</Button>

        <h2> { value }</h2>
        <form>
          <label>
            Name:
            <input value={ value } onChange={ (e) => value = e}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
