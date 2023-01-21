import mongoose from 'mongoose';

export default class MongoDB {
    constructor() {
        this.mongoose = mongoose;
        this.mongoose.set('strictQuery', false);
        this.mongoose.connect(process.env.mongodb_uri, { 
            useNewUrlParser: true,
        });
        this.mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
        this.mongoose.connection.once('open', function() {
            console.log('MongoDB connection established successfully');
        });
    }
};