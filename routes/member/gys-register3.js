module.exports = function ( app ) {
    app.get('/gys-register3', function(req, res) {
        res.render('member/gys-register3',{
            title: '爱包装-供应商注册'
        });
    });
}
