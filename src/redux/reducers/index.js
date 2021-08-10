import {combineReducers} from "redux";
import filter from "./filters";
import pizzas from "./pizza";
import cart from "./cart";

const rootReducer = combineReducers({
    filter,
    pizzas,
    cart,
});

export default rootReducer