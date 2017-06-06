
module.exports = function ( app ) {
    app.get('/gys-register2', function(req, res) {
        res.render('member/gys-register2',{
            title: '爱包装-供应商注册'
        });
    });

    app.post('/gys-register2', function (req, res) {
        var param = {};
        param.name = req.body.contacts;
        param.password = req.body.password;
        param.company = req.body.company;
        param.province = req.body.province;
        param.city = req.body.city;
        param.email = req.body.email;
        param.craft = req.body.technology;
        param.tel = req.session.uname;
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
