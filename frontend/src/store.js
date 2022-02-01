import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk";

import booksReducer from './reducers/booksReducer'

const reducer = combineReducers({
  books: booksReducer
})

const Store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default Store