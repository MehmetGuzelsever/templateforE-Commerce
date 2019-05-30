const express = require("express");
const router  = express.Router();

//Default Services
const service      = require("./service/index");

//for Access Token
const jwt    = require("jsonwebtoken");
const secret = "mehmetguzelsever";

//Initial Request
router.get('/', function(req, res) {
    res.json({msg:"Welcome to E-Commerce api"});
})

//Default Post Request
router.post('/url', function(req, res) {
    service.module(req.body, function (error, response) {
        if (error) {
            res.send(error);
        }
        else {
            res.send(response);
        }
    })
})

//Access Token Verify
router.use(function(req, res, next) {
    var token =  req.headers['x-access-token'];

    if (token) {
        //verify
        jwt.verify(token, secret, function(err, decoded) {
            if (err) {
                res.json({
                    success: false,
                    message: 'Token Doğrulama Hatası'
                })
            }
            else {
                req.decoded = decoded;
                next();
            }
          });
    }
    else {
        res.json({
            success: false,
            message: "Token Bulunamadı."
        })
    }
})

//Token Kontrollü İstekler

//User Update
router.post('/url', function(req, res) {
    service.module2(req.body, function (error, response) {
        if (error) {
            res.send(error);
        }
        else {
            res.send(response);
        }
    })
})

//Export Router
module.exports=router;
