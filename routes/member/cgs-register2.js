
// var express = require('express');
// var mongoose = require('mongoose');
//
// global.dbHelper = require('../../dao/dbHelper');
// // global.db = mongoose.connect("mongodb://127.0.0.1:27017/account");
// mongoose.connect('mongodb://localhost/account');

module.exports = function ( app ) {
    app.get('/register2', function(req, res) {
        res.render('member/cgs-register2',{
            title: '爱包装-采购商注册'
        });
    });

    app.post('/register2', function (req, res) {
        var param = {};
        param.name = req.body.contacts;
        param.password = req.body.password;
        param.company = req.body.company;
        param.province = req.body.province;
        param.city = req.body.city;
        param.email = req.body.email;
        param.client = ""; //采购商0，供应商1

        var User = global.dbHelper.getModel('user');
        User.findOne(function (error, doc) {
            if (error) {
                res.sendStatus(500);
            } else {
                User.create(param, function (error, doc) {
                    if (error) {
                        console.log('注册 ' + error);
                        res.sendStatus(500);
                    } else {
                        res.status(200).send({
                            success: 200,
                            state: '用户名创建成功'
                        })
                    }
                });
            }
        });
    });
};
