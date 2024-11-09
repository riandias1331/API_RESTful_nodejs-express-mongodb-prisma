require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

const mongoose = require('mongoose')
const connectMDB = process.env.CONNECTION

mongoose.connect(connectMDB)
    .then(() => {
        console.log('Connected dataBase')
        app.emit('DataBase')
    })
    .catch((e) => console.log(e))

app.on('DataBase', () => {
    app.listen(port, () => {
        console.log('server is running in: ', port)
    })
})