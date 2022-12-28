import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ApartamentSchema = new Schema({
    _id: ObjectId,
    numeroDeQuartos: Number,
    preco: Number,
    descricao: String,
    imagem: String,
    endereco: {
        rua: String,
        numero: String,
        bairro: String,
        complemento: String
    },
    _userId: ObjectId
})

const ApartamentModel = mongoose.model('apartaments', ApartamentSchema)

export default ApartamentModel

