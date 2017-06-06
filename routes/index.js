module.exports = function(app){
  require('./member/login')(app);
  require('./member/logout')(app);
  require('./member/gys-register1')(app);
  require('./member/gys-register2')(app);
  require('./member/gys-register3')(app);
  require('./member/cgs-register1')(app);
  require('./member/cgs-register2')(app);
  require('./member/cgs-register3')(app);
  require('./member/registrationProtocol')(app);
  require('./member/forgetPass1')(app);
  require('./member/forgetPass2')(app);
  require('./portal/index')(app);
  // require('./register')(app);
  // require('./upload')(app);
};
