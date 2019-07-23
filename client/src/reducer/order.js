import Action from "../action/order-action";

let initData = {
    data: [],
    name: "",
    editName: ""
}

const order = (data = initData, action) => {
    switch (action.type) {
        case Action.ADD_ORDER:
        case Action.DELETE_ORDER:
        case Action.GET_ORDER_LIST:
        case Action.UPDATE_ORDER_STATUS:
        case Action.CHANGE_ORDER_VALUE:
            return { ...data, ...action.payload }
        default:
            return { ...data }
    }
}

export default order;