module.exports = function ( app ) {
    app.get('/index', function(req,res){
        res.render('portal/index',{
            title: '爱包装-首页'
        });
    });
}
