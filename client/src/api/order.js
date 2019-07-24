import axios from "axios";

const getList = () => axios.get("/api/user/order/list");
const addOrder = param => axios.post("/api/user/order/add", param);
const deleteOrder = param => axios.get("/api/user/order/delete?id=" + param.id);

export default {
    getList,
    addOrder,
    deleteOrder
}