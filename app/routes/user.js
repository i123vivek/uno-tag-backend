const express = require('express');
const router = express.Router();
const appConfig = require("./../../config/appConfig");
const userController = require("./../../app/controllers/userController");
const auth = require('./../middlewares/auth');

module.exports.setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}`;

    app.post(`${baseUrl}/users/signup`, userController.signUpFunction);

    app.post(`${baseUrl}/users/login`, userController.loginFunction);

    app.get(`${baseUrl}/users/:userId/details`, userController.getUserDetailByUserId);

    app.get(`${baseUrl}/users/:userName/details`, userController.getUserDetailByUserName);
}