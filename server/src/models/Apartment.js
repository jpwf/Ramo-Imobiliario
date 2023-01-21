import { Schema, model } from 'mongoose';

const ApartmentSchema = new Schema({
    numberOfBedrooms: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    address: {
        type: {
            street: {
                type: String,
                required: true,
            },
            number: {
                type: String,
                required: true,
            },
            district: {
                type: String,
                required: true,
            },
            complement: {
                type: String,
                required: false,
            }
        },
        required: true,
        index: { unique: true }
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    }
});

const ApartmentModel = model('apartments', ApartmentSchema);
ApartmentModel.createIndexes();

export default model('apartments', ApartmentSchema);
