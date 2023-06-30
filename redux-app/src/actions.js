export const IncAction = () => async dispatch => {
    // console.log(value)
    dispatch({
        type : 'INCREMENT',
        payload : 1

    })
}

export const DecAction = () => async dispatch => {
    dispatch({
        type : 'DECREMENT',
        payload : 1
    })
}

export const setInput = (value) => async dispatch => {
    // console.log(value)
    dispatch({
        type : "HANDLE_INPUT",
        payload : value 
    })
}