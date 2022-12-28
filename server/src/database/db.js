import mongoose from 'mongoose'

const connectDatabase = () => {

    console.log("wait connection...")

    mongoose.connect("mongodb+srv://AnaB:73101101@cluster0.ssaa5pi.mongodb.net/?retryWrites=true&w=majority",
        { useNewURLParser: true, useUnifiedTopology: true }).then(() => console.log("MongoDB Atlas Connected")).catch((error) => console.log(error)) //conectando com  o banco de dados
}

export default connectDatabase
