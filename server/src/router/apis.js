const orderController = require("../controller/orderController");

const prefix = "/api/user";

const Apis = router => {
    router.prefix(prefix);
    router.get('/order/list', orderController.getList);
    router.post('/order/add', orderController.addOrder);
    router.get('/order/delete', orderController.deleteOrder)
};

module.exports = Apis;