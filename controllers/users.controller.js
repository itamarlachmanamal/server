const db = require('../middleware/mysqldb');

exports.getAllUsers = async (req, res) => {
    const users = await db.getUsers()
    res.json(users);
};


