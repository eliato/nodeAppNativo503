const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        commentary: {
            required: true,
            type: String
        },
        stars:{
            required: true,
            type: Number
        },
        name: {
            required: true,
            type: String
        }
    }
)

const tripSchema = new mongoose.Schema({
    images: {
        required: true,
        type: [String]
    },
    destTitle: {
        required: true,
        type: String
    },
    location:{
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    description: {
        type: String
    },
    include:{
        required: true,
        type: [String]
    },
    reviews: {
        required: false,
        type: [reviewSchema]
    }
})

module.exports = mongoose.model('Trips', tripSchema)