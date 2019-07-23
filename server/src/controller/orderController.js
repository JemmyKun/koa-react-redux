const order = require("../data/order");

const errInfo = {
    status: "500",
    content: [],
    message: "服务器内部错误"
};

class OrderController {
    async getList(ctx) {
        try {
            let result = await order.getList();
            ctx.ok({
                status: "200",
                content: result,
                message: "查询成功"
            })
        } catch (err) {
            ctx.ok(errInfo);
            throw err;
        }
    }
    async addOrder(ctx) {
        try {
            let param = { name: ctx.request.body.name }
            let result = await order.addOrder(param);
            if (result.affectedRows > 0) {
                ctx.ok({
                    status: "200",
                    content: true,
                    message: "添加成功"
                })
            } else {
                ctx.ok({
                    status: "400",
                    content: false,
                    message: "添加失败"
                })
            }

        } catch (err) {
            ctx.ok(errInfo);
            throw err;
        }
    }
    async deleteOrder(ctx) {
        try {
            let param = { id: ctx.query.id }
            let result = await order.deleteOrder(param);
            if (result.affectedRows > 0) {
                ctx.ok({
                    status: "200",
                    content: true,
                    message: "删除成功"
                })
            } else {
                ctx.ok({
                    status: "400",
                    content: false,
                    message: "删除失败"
                })
            }

        } catch (err) {
            ctx.ok(errInfo);
            throw err;
        }
    }
}

module.exports = new OrderController();