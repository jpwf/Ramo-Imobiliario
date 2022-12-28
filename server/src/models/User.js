import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    }, 
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String, 
        required: true,
        unique: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true  
    }
})

const UserModel = mongoose.model('users', UserSchema)

export default UserModel
