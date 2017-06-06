module.exports = function ( app ) {
    app.get('/logout', function(req, res){
        console.log("------------------user----------------------");
        console.log(req.session.user);
        req.session.user = null;
        res.redirect('/');
    });
}