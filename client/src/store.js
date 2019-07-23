import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducer from './reducer';
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];
const store = createStore(reducer, applyMiddleware(...middlewares));
const sagaInstance = sagaMiddleware.run(saga);

const initData = store.getState();
console.log("initData:->", initData, sagaInstance);

const dispatch = store.dispatch;

export {
    store, dispatch, sagaInstance
}