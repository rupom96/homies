function orderReducer(state = [], action) {

    switch (action.type) {
        case 'ADD_TO_ORDER_LIST': {
            const newState = [...state, action.payload];
            return newState
        }

        case 'REMOVE_FROM_ORDER_LIST': {
            const newState = state.filter((ORDER) => ORDER.id !== action.payload);
            return newState;
        }
        case 'UPDATE_ORDER': {
            // const newState = [...state, action.payload];
            const nState = state.filter((ORDER) => ORDER.id === action.payload);
            nState.status = 'Approved';
            const newState = [...state, nState]
            return newState
        }
        default:
            return state


    }
}
export default orderReducer