
const initialState = {
    data: { publishers: "initialpub" }
}

const booksReducer = (state = initialState, action) => {
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
        data: { publishers: "askjh" }
    }
    console.log(toDispatch)
    return async dispatch => {
        dispatch(toDispatch)
    }
}


export default booksReducer