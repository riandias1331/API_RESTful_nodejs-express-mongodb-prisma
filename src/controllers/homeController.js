const Users = require('../models/UsersDatabase')

exports.read = async (req, res) => {
    try {
        const user = await Users.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}

exports.created = async (req, res) => {
    try{
        const { name, email, password } = req.body
        const user = await Users.create({ name, email, password })
        res.status(201).json(user)

    } catch(error){
        res.status(400).json({ message: error.message  })
    }
}

exports.update = async (req, res) => {
    try{

        const userId = req.params.id
        const updateId = req.body
        const user = await Users.findByIdAndUpdate(userId, updateId, {new: true})
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        } res.status(200).json(user);
    } catch(error){
        res.status(400).json({ message: error.message  })
    }
}

exports.deleted = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await Users.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        } res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}