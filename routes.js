const express = require('express')
const route = express.Router()

const homeController  = require('./src/controllers/homeController')

route.post('/users', homeController.created);
route.get('/users', homeController.read);
route.put('/users/:id', homeController.update);
route.delete('/users/:id', homeController.deleted);

module.exports = route;