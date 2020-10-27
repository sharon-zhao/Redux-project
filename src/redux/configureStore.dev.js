import { createStore, applyMiddleware, compose } from "redux";
//.reducer don't need index because it is implit
import rootReducer from "./reducers";
//reduxImmutableStateInvariant is a function don't foget ()
// it will warn us if we accidentally mutate redux state
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  //redux devtool they're handy for interacting with redux store
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
  // redux middleware is a way to enhance redux's behavior
}
