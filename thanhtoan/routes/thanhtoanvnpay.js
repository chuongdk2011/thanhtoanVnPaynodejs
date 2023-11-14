var express = require('express');
var routes = express.Router();
var paymentController = require('../controllers/thanhtoanvnpay.controller');

routes.post('/create_payment_url', paymentController.payment);
routes.get('/create_payment_url', paymentController.payment);

routes.get('/vnpay_return', paymentController.ex_return);
routes.get('/vnpay_ipn', paymentController.ex_ipn);

module.exports = routes;