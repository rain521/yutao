module.exports = function ( app ) {
    app.get('/login',function(req,res){
        res.render('member/login',{
            title: '爱包装-登录'
        });
    });

    app.post('/login', function (req, res) {
        var User = global.dbHelper.getModel('user'),
            tel = req.body.tel;
        User.findOne({tel: tel}, function (error, doc) {
            if (error) {
                res.sendStatus(500);
            } else if (!doc) {
                res.status(200).send({
                    success: 500,
                    state: '手机号不存在'
                })
            } else {
               if(req.body.password != doc.password){
                   res.status(200).send({
                       success: 404,
                       state: '密码错误'
                   })
               }else{
                   req.session.user=doc;
                   res.status(200).send({
                       success: 200,
                       state: '登录成功'
                   })
               }
            }
        });
    });

}
