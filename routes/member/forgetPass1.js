
var mongoose = require('mongoose');

module.exports = function ( app ) {
    app.get('/forgetPass1', function(req, res) {
        res.render('member/forgetPass1',{
            title: '爱包装-忘记密码'
        });
    });

    app.post('/forgetPass1', function (req, res) {
        //查询数据查询数据
        var User = mongoose.model('user');
        var uname = req.body.uname;
        User.findOne({tel: uname}, function(error, students){
                if (students) {
                    req.session.forgetPass = students;
                    res.status(200).send({
                        success: 200,
                        state: '验证成功'
                    })
                    return
                }else {
                    res.status(200).send({
                        success: 404,
                        state: '用户名不存在，请注册账号'
                    })
                }
        });
    });
}
