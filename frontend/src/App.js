import React, { useState } from 'react'
import './App.css'
import Books from './components/Books'
import { performSearch } from './reducers/booksReducer'

import { useDispatch } from "react-redux";


const App = () => {
  const dispatch = useDispatch();

  const [keywords, setKeywords] = useState('')
  const doSearch = (event) => {
    event.preventDefault()
    dispatch(performSearch(keywords))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='field-box'>
          <h2>Search</h2>
          <form onSubmit={doSearch}>
            <input
              type="text"
              value={keywords}
              name="Keywords"
              onChange={({ target }) => setKeywords(target.value)}
            />            <br />
            <button type='submit' className='submit-button'>Search</button>
          </form>
        </div>
        <Books />
      </header >
    </div >
  );
}

export default App;