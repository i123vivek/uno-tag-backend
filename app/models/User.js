'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let userSchema = new Schema({
    userId: {
        type: String,
        default: '',
        index: true,
        unique: true
    },
    name: {
        type: String,
        default: ''
    },
    userName: {
        type: String,
        unique: true,
        default: ''
    },
    password: {
        type: String,
        default: 'passskdajakdjkadsj'
    },
    state: {
        type: String,
        default: 'Andaman and Nicobar Islands'
    },
    stateKey: {
        type: String,
        default: 'AN'
    },
    createdOn: {
        type: Date,
        default: ""
    }


})


mongoose.model('User', userSchema);