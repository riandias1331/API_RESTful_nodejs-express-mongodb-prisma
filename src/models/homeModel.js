const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String 
})

//                                nameDataBase
const HomeModel = mongoose.model('apiRestful', HomeSchema)

// module.exports = HomeModel

class homedatabase  {

}

module.exports = homedatabase