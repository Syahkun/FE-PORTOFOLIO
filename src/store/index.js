import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

//import reducer
// import newsReducer from "./reducer/newsReducer";
import userReducer from "./reducer/userReducer";
import productReducer from "./reducer/productReduce";
import transactionReducer from "./reducer/transactionReduce";
// import moviesReducer from "./reducer/MoviesReducer";

const rootReducer = combineReducers({
  // news: newsReducer,
  user: userReducer,
  product: productReducer,
  transaction: transactionReducer,
  // movies: moviesReducer,
});

// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.subscribe(() => console.warn("cek state store", store.getState()));

export default store;
