module.exports = function ( app ) {
    app.get('/registrationProtocol', function(req, res){
        res.redirect('member/registrationProtocol',{
            title: '爱包装-用户注册协议'
        });
    });
}