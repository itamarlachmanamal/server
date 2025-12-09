const db = require('../middleware/mysqldb');
const UserModel = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
    let userRows = [];
    const rows = await db.getUsers();
    rows.forEach(row => {
        const user = new UserModel(row.id, row.username, row.password, row.phone);
        userRows.push(user);
    })
    res.json(userRows);
};

exports.getUser = asy


