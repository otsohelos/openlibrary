import React from 'react'
import './App.css'
import Books from './components/Books'

//import { useDispatch } from "react-redux";


const App = () => {
  //const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p>
        Hello World
        </p>
      </header>
      <Books />
    </div>
  );
}

export default App;