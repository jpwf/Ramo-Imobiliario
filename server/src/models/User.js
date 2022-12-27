const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const UserSchema = new Schema({
    id: ObjectId,
    email: String,
    senha: String, 
    nomeCompleto: String,
    telefone: Number, 
    cpf: String,
})

const UserModel = mongoose.model('users', UserSchema)
module.exports = UserSchema

