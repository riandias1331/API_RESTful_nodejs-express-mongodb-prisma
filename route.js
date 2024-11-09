const express = require('express')
const route = express.Router()

const { homeController } = require('./src/controllers')

route.post('/', homeController.createUser);
route.get('/', homeController.getAllUsers);
route.put('/:id', homeController.updateUser);
route.delete('/:id', homeController.deleteUser);

module.exports = route;