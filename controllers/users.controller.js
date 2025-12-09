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

exports.getUserById = async (req, res) => {
    const id = req.params.id;
    const row = await db.getUser(id);
    const user = new UserModel(row[0].id, row[0].username, row[0].password, row[0].phone);
    if (user) res.json(user);
    else res.status(404).json({ message: 'User not found' });
};


