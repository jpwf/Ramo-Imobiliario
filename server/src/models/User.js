import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        index: { unique: true }
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
        index: { unique: true }
    },
    cpf: {
        type: String,
        required: true,
        index: { unique: true }  
    }
});

UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 8);
    next();
})

const UserModel = model('users', UserSchema);
UserModel.createIndexes();

export default UserModel;
