'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let productSchema = new Schema({
    productId: {
        type: String,
        default: '',
        index: true,
        unique: true
    },
    productName: {
        type: String,
        default: ''
    },
    productType: {
        type: String,
        default: ''
    },
    productImage: {
        type: String,
        default: ''
    },
    productImagePath: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 3000
    },
    creatorUserName:{
        type: String,
        default: ''
    },
    createdOn: {
        type: Date,
        default: ""
    }


})


mongoose.model('Product', productSchema);