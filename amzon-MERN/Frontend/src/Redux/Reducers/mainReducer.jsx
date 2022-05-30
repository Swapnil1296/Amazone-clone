import {getProductsReducers} from "./productReducer";

import {combineReducers} from "redux";

const rootreducers = combineReducers({
  getproductsdata: getProductsReducers,
});

export default rootreducers;
