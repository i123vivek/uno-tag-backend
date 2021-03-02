const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib');
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib');
const check = require('../libs/checkLib');
const stateDetails = require('../libs/checkStateLib');
const token = require('../libs/tokenLib');
const AuthModel = mongoose.model('Auth');
const UserModel = mongoose.model('User');
const ProductModel = mongoose.model('Product');
const events = require('events');
const eventEmitter = new events.EventEmitter();

let productCreator = (req, res) => {
    let validateProductInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.userName) {
                if (!validateInput.Email(req.body.userName)) {
                    let apiResponse = response.generate(true, 'UserName Does not met the requirement', 400, null)
                    reject(apiResponse)
                }
                else {
                    resolve(req)
                }
            } else {
                logger.error('Field Missing During product Creation', 'productController: createProduct()', 5)
                let apiResponse = response.generate(true, 'UserName Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    } // end of validateIssueInput function.

    let createProduct = () => {
        return new Promise((resolve, reject) => {
            let fileName = req.file.path.split('\\')[0]

            console.log('filepath', fileName)

            let newProduct = new ProductModel({
                productId: shortid.generate(),
                productName: req.body.productName,
                productType: req.body.productType.toLowerCase(),
                price: req.body.price,
                creatorUserName: req.body.userName.toLowerCase(),
                createdOn: time.now(),
                productImage: req.file.filename,
                productImagePath: fileName
            })
            newProduct.save((err, newProduct) => {
                if (err) {
                    console.log("error while saving product: ", err)
                    logger.error(err.message, 'productController: createProduct', 10)
                    let apiResponse = response.generate(true, 'Failed to create new product', 500, null)
                    reject(apiResponse)
                } else {
                    let newProductObj = newProduct.toObject();
                    console.log('product created', newProductObj)
                    resolve(newProductObj)
                }
            })
        })
    }


    validateProductInput(req, res)
        .then(createProduct)
        .then((resolve) => {

            let apiResponse = response.generate(false, 'Product created', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}  // end of productCreator function.

let getProductInfo = (req, res) => {

    console.log("the req is", req.params, req.query);
    if (req.params.option) {
        if (req.params.option == 1 ) {
            ProductModel.findOne({ 'productType': 'mobile' })
                .exec((err, result) => {
                    if (err) {
                        console.log(err)
                        let apiResponse = response.generate(true, 'Failed To find mobile product', 500, null)
                        res.send(apiResponse)
                    } else if (check.isEmpty(result)) {
                        let apiResponse = response.generate(true, 'No mobile Found', 404, null)
                        res.send(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'mobile details Found', 200, result)
                        res.send(apiResponse)
                    }
                })
        } else if (req.params.option == 2) {
            ProductModel.findOne({ 'productType': 'diary' })
                .exec((err, result) => {
                    if (err) {
                        console.log(err)

                        let apiResponse = response.generate(true, 'Failed To Find diary product', 500, null)
                        res.send(apiResponse)
                    } else if (check.isEmpty(result)) {
                        console.log("result here is", result);

                        let apiResponse = response.generate(true, 'No diary details Found', 404, null)
                        res.send(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'diary details Found', 200, result)
                        res.send(apiResponse)
                    }
                })
        } else if (req.params.option == 3) {
            ProductModel.findOne({ 'productType': 'bottle' })
                .exec((err, result) => {
                    if (err) {
                        console.log(err)

                        let apiResponse = response.generate(true, 'Failed To Find bottle product', 500, null)
                        res.send(apiResponse)
                    } else if (check.isEmpty(result)) {

                        let apiResponse = response.generate(true, 'No bottle details Found', 404, null)
                        res.send(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'bottle details Found', 200, result)
                        res.send(apiResponse)
                    }
                })
        }
    }
}





module.exports = {
    productCreator: productCreator,
    getProductInfo: getProductInfo
}