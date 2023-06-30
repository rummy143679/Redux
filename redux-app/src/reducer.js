const initialState = {
    name : '',
    count : 0,
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    // console.log(payload)
    switch (type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + payload
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - payload
            }
        case 'HANDLE_INPUT':
            return {
                ...state,
                name: payload
            }

        default:
            return state;
    }
}