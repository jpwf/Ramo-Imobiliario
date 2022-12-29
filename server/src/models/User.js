import mongoose from 'mongoose'
const Schema = mongoose.Schema
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        select: false,
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

UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 8)
    next()
})

const UserModel = mongoose.model('users', UserSchema)

export default UserModel
