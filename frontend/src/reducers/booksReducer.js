import booksService from '../services/books'


const booksReducer = (state = null, action) => {
    console.log(action)

    switch (action.type) {
        default:
            return state
        case 'INIT_SEARCH':
            return action.data
    }
}

export const initSearch = () => {
    console.log("hey!")

    const toDispatch = {
        type: 'INIT_SEARCH',
        data: null
    }
    console.log(toDispatch)
    return async dispatch => {
        dispatch(toDispatch)
    }
}

export const performSearch = (keyword) => {
    return async dispatch => {
        console.log('dispatch')
        const foundBooks = await booksService.findByKeyword(keyword)
        dispatch({
            type: 'INIT_SEARCH',
            data: foundBooks
        })
    }
}


export default booksReducer