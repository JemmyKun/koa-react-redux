import axios from "axios";

const getList = () => axios.get("/api/user/order/list");
const addOrder = param => axios.post("/api/user/order/add", param);

export default {
    getList,
    addOrder
}