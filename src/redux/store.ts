import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({

})

export type StateType = ReturnType<typeof reducers>

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.store = store