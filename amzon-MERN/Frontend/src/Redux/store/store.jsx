
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import rootreducers from "../Reducers/mainReducer";



const store = configureStore({
  reducer: rootreducers,
  middleware: [thunk],
});

// Store specifically has the thunk and logger middleware applied
// store.subscribe(() => {
//   console.log("Subscribe:", store.getState());
// });
// console.log(store.getState())

export default store;
