import { all } from "redux-saga/effects";
import order from './order';

export default function* rootSaga() {
    yield all([
        order()
    ])
}