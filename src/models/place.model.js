import mongoose, { Schema } from "mongoose";

const placeSchema = new Schema({

    city: {
        type: String,
        required: true,
        lowerCase: true,
        trim: true,

    },
    placeName: {
        type: String,
        required: true,
        trim: true,
        lowerCase: true
    },
    details: {
        type: String,
        required: true,
    },
    placeImage: {
        type: String,
        required: true
    }

})

export const Place = mongoose.model('Place', placeSchema)