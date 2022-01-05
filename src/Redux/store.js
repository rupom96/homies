import { createStore, combineReducers } from "redux";
import orderReducer from "./reducers/orderReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
    products: productReducer,
    orders: orderReducer
})
const store = createStore(rootReducer);

export default store;