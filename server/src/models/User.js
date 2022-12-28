import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const UserSchema = new Schema({
    _id: ObjectId,
    email: {
        type: String,
        unique: true // nao podemos ter mais de um email igual na aplicacao
    },
    senha: String, 
    nomeCompleto: String,
    telefone: Number, 
    cpf: String
})

const UserModel = mongoose.model('users', UserSchema)

export default UserModel
