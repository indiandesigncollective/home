//MODEL FOR PRODUCT DATA//

import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: {type:String, required: true},
    rating: {type:Number, required: true},
    comment: {type:String, required: true},
}, {
    timestamps: true
})

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },        
    Name: {
        type: String,
        required: true
    },
    Image_URL_1: {
        type: String,
        required: true,
    },
    Image_URL_2: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],
    Ratings: {
        type: Number,
        required: true,
        default: 0
    },
    Quantity: {
        type: Number,
        required: true,
        default: 0
    },
    Price: {
        type: Number,
        required: true,
        default: 0
    },
    Tag: {
        type: String,
        required: false
    },
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)
export default Product