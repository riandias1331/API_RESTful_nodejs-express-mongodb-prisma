const Users = require('../models/UsersDatabase')

const bcrypt = require('bcrypt')


exports.getUsers = async (req, res) => {
    try {
        const user = await Users.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}
exports.getUser = async (req, res) => {
    try {
        const user = await Users.findById(req.params.id)

        if (!user) {
            return res.status(404).json({ message: 'user not found' });
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.created = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const user = await Users.create({
            name,
            email,
            password: hashPassword
        })
        res.status(201).json(user)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.update = async (req, res) => {
    try {

        const userId = req.params.id
        const updateId = req.body
        const user = await Users.findByIdAndUpdate(userId, updateId, { new: true })
        if (!user) {
            return res.status(404).json({ message: 'user not found' });
        } res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.deleted = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await Users.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: 'user not found' });
        } res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}