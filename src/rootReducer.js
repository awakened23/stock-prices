import { combineReducers } from "redux";
import stockPrices from "./modules/stockPrices"

const rootReducer = combineReducers({
    stockPrices
});

export default rootReducer;
