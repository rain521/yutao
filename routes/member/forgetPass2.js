var mongoose = require('mongoose');
module.exports = function ( app ) {
    app.get('/forgetPass2', function(req, res) {
        res.render('member/forgetPass2',{
            title: '爱包装-忘记密码'
        });
    });

    app.post('/forgetPass2', function (req, res) {
        var pass = req.session.forgetPass._id;
        var User = mongoose.model('user');
        var password = req.body.password;
        User.update({_id: pass},{password: password},{multi: false}, function(err, row_updated){
          if(err){
            console.log(err);
              res.status(200).send({
                  success: 404,
                  state: err
              })
            return;
          }else{
              res.status(200).send({
                  success: 200,
                  state: err
              })
          }
        })
    });

    app.get('/forgetPass3', function(req, res) {
        res.render('member/forgetPass3',{
            title: '爱包装-忘记密码'
        });
    });
}
