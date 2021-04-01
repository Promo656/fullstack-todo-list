import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import logger from 'redux-logger'
import thunkMiddleware from "redux-thunk";
import {boards} from "./boardReducer";
import {todoLists} from "./todoListReducer";
import {tasks} from "./taskReducer";

let reducers = combineReducers({
    boards,
    todoLists,
    tasks
})

export type StateType = ReturnType<typeof reducers>

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware, logger)));

// @ts-ignore
window.store = store