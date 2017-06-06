module.exports = function ( app ) {
    app.get('/register1', function(req, res) {
        res.render('member/cgs-register1',{
            title: '爱包装-采购商注册'
        });
    });

    app.post('/register1', function (req, res) {

        var User = global.dbHelper.getModel('user'),
            uname = req.body.uname;
        User.findOne({tel: uname}, function (error, doc) {
            if (error) {
                res.sendStatus(500);
            } else if (doc) {
                // res.sendStatus(500);
                res.status(200).send({
                    success: 500,
                    state: '用户名已存在'
                })
            } else {
                req.session.uname = uname;
                // res.sendStatus(200);
                res.status(200).send({
                    success: 200,
                    state: '用户名创建成功'
                })
            }
        });
    });
}
