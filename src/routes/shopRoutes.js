
const express = require('express')
const router = express.Router()
const getShop = require('../controller/shop/getShopController.js')
const getItem = require('../controller/shop/getItem.js')
const getCart = require('../controller/shop/getCart.js')

router.get('/shop', getShop)

router.get('/shop/item/:id', getItem)

router.get('/shop/cart', getCart)

module.exports = router