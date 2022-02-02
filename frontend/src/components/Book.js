import React from 'react'


const Book = (book) => {
    const imgUrl = `http://covers.openlibrary.org/b/id/${book.book.cover_i}-S.jpg`
    const altText = `Cover of ${book.book.title}`
    return (
        <table className='book-listing'>
            <tbody>
                <tr className='book-item'>
                    <td className='book-cover-thumbnail'><img src={imgUrl} alt={altText} /></td>
                    <td className='book-title'>{book.book.title}</td>
                    <td className='book-author'>{book.book.author_name}</td>
                </tr>
            </tbody>
        </table>)
}

export default Book