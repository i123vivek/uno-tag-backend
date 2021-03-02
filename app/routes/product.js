const express = require('express');
const router = express.Router();
const appConfig = require("./../../config/appConfig");
const productController = require("./../../app/controllers/productController");
const auth = require('./../middlewares/auth');
const multerLib = require('./../multer/multer');

module.exports.setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}`;

    app.post(`${baseUrl}/product/create`,multerLib.upload, productController.productCreator);
    app.get(`${baseUrl}/product/:option`, productController.getProductInfo);
}