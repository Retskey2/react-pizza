const initialState = {
    items: [],
    isLoaded: false
}

const pizza = (state = initialState, action) => {
    if (action.type === 'SET_PIZZA') {
        return {
            ...state,
            items: action.payload
        };
    }
    return state;
}

export default pizza;