import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import bookService from '../services/books'
import { initSearch } from '../reducers/booksReducer'

const Books = () => {
    const books = useSelector(state => state.books)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initSearch())
    }, [dispatch])

    const booksToDisplay = (books === undefined) ? 'undefined' : `${books.publishers}`
    return (
        <p>Hello Underworld
            <br />
            {booksToDisplay}
        </p>
    )

}

export default Books