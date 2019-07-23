const { query } = require("../mysql/config");

class Order {
    getList() {
        let sql = "SELECT * FROM order_list ORDER BY updateTime DESC";
        return query(sql, []);
    }
    addOrder(param) {
        let { name } = param;
        let createTime = new Date().getTime();
        let updateTime = createTime;
        let sql = "INSERT INTO order_list(name,createTime,updateTime) VALUES(?,?,?)";
        return query(sql, [name, createTime, updateTime]);
    }
    deletOrder(param) {
        let { id } = param;
        let sql = "DELETE FROM order_list WHERE id=?";
        return query(sql, [id]);
    }
}

module.exports = new Order();