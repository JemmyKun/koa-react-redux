const mysql = require("mysql");

const pool = mysql.createPool({
    database: "react_admin",
    host: "localhost",
    user: "root",
    password: "root",
    connectTimeout: 1000 * 60 * 3,
    connectionLimit: 20
});

const query = (sql, holder) => (
    new Promise((resolve, reject) => {
        pool.getConnection((err, connecttion) => {
            if (err) {
                throw err;
            } else {
                connecttion.query(sql, holder, (err, result) => {
                    if (err) {
                        throw err;
                    } else {
                        resolve(result);
                    }
                    connecttion.release();
                })
            }
        })
    })
)

module.exports = {
    pool,
    query
}