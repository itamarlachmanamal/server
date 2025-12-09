const mysql = require('mysql2/promise');

class MySQLDB  {
    constructor() {
        this.pool = mysql.createPool({
                host: "localhost" ,
                database: "example",
                user: "admin" ,
                "password": "admin"
            });
        }

    async getUsers() {
        return await this.pool.query("SELECT * FROM users"); // destructure the result
    }
}

const DB = new MySQLDB();
module.exports = DB ;
