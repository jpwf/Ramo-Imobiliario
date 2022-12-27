import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    id: ObjectId,
    email: String,
    hashSenha: String, 
    nomeCompleto: String,
    telefone: Number, 
    cpf: String
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;
