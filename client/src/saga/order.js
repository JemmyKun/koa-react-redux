import { put, call, takeEvery } from "redux-saga/effects";
import Action from "../action/order-action";
import { getSagaType, getReducerType } from "../utils/sagaType";
import Apis from "../api/order";
import { message as Message } from "antd";

function* getList(action) {
    try {
        let type = getReducerType(action.type);
        let res = yield call(Apis.getList.bind(this));
        if (res && res.data.status === "200") {
            let data = res.data.content;
            let action = {
                type,
                payload: {
                    data,
                    name: "",
                    editName: ""
                }
            }
            yield put(action);
        }
    } catch (err) {
        console.log(err);
    }
}
function* addorder(action) {
    try {
        let param = action.param;
        let res = yield call(Apis.addOrder.bind(this, param));
        if (res && res.data.status === "200") {
            let action = {
                type: getSagaType(Action.GET_ORDER_LIST)
            }
            yield put(action);
        }
    } catch (err) {
        console.log(err);
    }
}
function* deleteOrder(action) {
    try {
        let param = action.param;
        let res = yield call(Apis.deleteOrder.bind(this, param));
        if (res && res.data.status === "200") {
            Message.success("删除成功");
            let action = {
                type: getSagaType(Action.GET_ORDER_LIST)
            }
            yield put(action);
        }
    } catch (err) {
        console.log(err);
    }
}
export default function* order() {
    yield takeEvery(getSagaType(Action.GET_ORDER_LIST), getList);
    yield takeEvery(getSagaType(Action.ADD_ORDER), addorder);
    yield takeEvery(getSagaType(Action.DELETE_ORDER), deleteOrder);
};