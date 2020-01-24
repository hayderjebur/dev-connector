import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
