module.exports = function ( app ) {
    app.get('/register3', function(req, res) {
        res.render('member/cgs-register3',{
            title: '爱包装-采购商注册'
        });
    });
}
