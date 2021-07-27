import {combineReducers} from "redux";
import filterReducer from "./filters";
import pizzaReducer from "./filters";

const rootReducer = combineReducers({
    filter : filterReducer,
    pizza  : pizzaReducer,
});

export default rootReducer