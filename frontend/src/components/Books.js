import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initSearch } from '../reducers/booksReducer'
import Book from './Book'

const Books = () => {
    const books = useSelector(state => state.books)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initSearch())
    }, [dispatch])

    const booksToDisplay = (books === undefined) ? 'No books found'
        : (books === null) ? <p>search for books</p> : (
            books.map(book => <Book book={book} key={book.key} />))
    return (
        <div>
            <br />
            {booksToDisplay}
        </div>
    )

}

export default Books