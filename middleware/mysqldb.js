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
        const rows =  (await this.pool.query("SELECT * FROM users")); // destructure the result
        return rows[0]; // return only the rows
    }
}

const DB = new MySQLDB();
module.exports = DB ;
