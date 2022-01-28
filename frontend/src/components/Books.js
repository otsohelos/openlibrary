import React, { useState, useEffect } from 'react'
import bookService from '../services/books'

const Books = () => {
    const [books, setBooks] = useState('')

    useEffect(() => {
        bookService
            .getAll().then(result => {
                setBooks(result)
                console.log('books: ', books)
            })
    }, [])

    const booksToDisplay = (books === undefined) ? 'undefined' : `${books.publishers}`
    return (
        <p>Hello Underworld
            <br />
            {booksToDisplay}
        </p>
    )

}

export default Books