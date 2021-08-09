const initialState = {
    items: [],
    isLoaded: false
}

const pizza = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZA':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            };
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            };
        default:
            return state;
    }
}

export default pizza;