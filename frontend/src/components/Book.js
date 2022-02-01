import React from 'react'


const Book = (book) => {
    const imgUrl = `http://covers.openlibrary.org/b/id/${book.book.cover_i}-S.jpg`
    return (<table>
        <td><img src={imgUrl} /></td>
        <td><p>{book.book.title}</p></td>
        <td>{book.book.author_name}</td></table>)
}

export default Book