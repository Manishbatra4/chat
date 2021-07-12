const mysql = require("mysql");

const db = mysql.createConnection({
    host: "remotemysql.com",
    user: "QGNSqyZnno",
    password: "92J26myxtd",
    database: "QGNSqyZnno"
});

db.connect((err) => {
    if (err){
        throw err;
    }
    console.log("MySql Connected...")
})

module.exports = db;