import React from 'react'


const Book = (book) => {
    const imgUrl = `http://covers.openlibrary.org/b/id/${book.book.cover_i}-S.jpg`
    const altText = `Cover of ${book.book.title}`
    return (
        <table>
            <td class="book-cover-thumbnail"><img src={imgUrl} alt={altText} /></td>
            <td class="book-title">{book.book.title}</td>
            <td class="book-author">{book.book.author_name}</td>
        </table>)
}

export default Book