// import useData from "../../hooks/useData";

function productReducer(state = [], action) {

    switch (action.type) {
        case 'ADD_TO_PROPERTY_LIST': {
            const newState = [...state, action.payload];
            return newState
        }

        case 'REMOVE_FROM_PRODUCT_LIST': {
            const newState = state.filter((product) => product.id !== action.payload);
            return newState;
        }
        case 'UPDATE_PROPERTY': {
            // const newState = [...state, action.payload];
            const nState = state.filter((product) => product.id === action.payload);
            nState.status = 'Brand';
            const newState = [...state, nState]
            return newState
        }
        default:
            return state


    }
}
export default productReducer