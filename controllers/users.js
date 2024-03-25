const User = require('../models/user');


exports.getAllUsers = async (req, res, next) => {
    User.findAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

exports.getUserById = async (req, res, next) => {
    const userId = req.params.id;
    User.findByPk(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

exports.createUser = async (req, res, next) => {
    const { name, email, phone } = req.body;
    User.create({
        name: name,
        email: email,
        phone: phone
    })
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

exports.updateUser = async (req, res, next) => {
    const userId = req.params.id;
    const { name, email, phone } = req.body;
    User.findByPk(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            user.name = name;
            user.email = email;
            user.phone = phone;
            return user.save();
        })
        .then(user => {
            res.status(200).json({ message: 'User updated', user: user });
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

exports.deleteUser = async (req, res, next) => {
    const userId = req.params.id;
    User.findByPk(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return user.destroy();
        })
        .then(() => {
            res.status(200).json({ message: 'User deleted' });
        })
        .catch(err => {
            res.status(500).json(err);
        });
}