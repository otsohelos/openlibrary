import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import bookService from '../services/books'
import { initSearch } from '../reducers/booksReducer'
import Book from './Book'

const Books = () => {
    const books = useSelector(state => state.books)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initSearch())
    }, [dispatch])

    const booksToDisplay = (books === undefined) ? 'undefined' 
    : (books === null) ? <p>search for books</p> : books.map(book => <Book book={book} />)
    return (
        <p>Hello World
            <br />
            {booksToDisplay}
        </p>
    )

}

export default Books