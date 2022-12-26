/*const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const UserSchema = new Schema(
    nomeCompleto: String,


)*/

import mongoose from 'mongoose';
const { Schema } = mongoose;
const User = mongoose.model('User', Schema);

const UserSchema = new Schema({
    nomeCompleto: String,
    email: String,
    senha: String, 
    telefone: Number, 
    cpf: String,

}
)