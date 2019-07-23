const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
const respond = require("koa-respond");
const logger = require("koa-logger");
const helmet = require("koa-helmet");
const path = require("path");
const bodyparser = require("koa-bodyparser");

const app = new Koa();
const router = new Router();
const port = process.env.PORT || "8080";
const staticPath = path.join(process.cwd(), './src/public');
const Apis = require("./router/apis");
Apis(router);

app.use(respond()).use(logger()).use(helmet()).use(bodyparser())
    .use(router.allowedMethods()).use(router.routes())
    .use(static(staticPath))
    .listen(port, () => {
        console.log("hello koa !! port:", port);
    });