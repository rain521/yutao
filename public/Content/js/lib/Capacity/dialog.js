(function ($, win) {
    //自定义弹窗对象
    var EnterDialog = {};

    //初始化弹窗
    EnterDialog.init = function (opts) {
        this.setOptions(opts);
        this.reovewBox();
        this.box();
        this.bindEvent();
        return this;
    };
    //初始化设置
    EnterDialog.setOptions = function (opts) {
        opts = $.extend(true, {
            DialogHtml: null,
            DialogImg:"alertv",
            callback:null
        }, opts);

        $.extend(true, this, opts);
    };
    EnterDialog.reovewBox = function(){
        $(".Dialog_css").remove();
    };
    //渲染弹窗
    EnterDialog.box = function () {
        this.headBox = $('<div class="Dialog_css" id="Dialog_css">' + 
                         '<img src="../images/' + EnterDialog.DialogImg + '.png">' + EnterDialog.DialogHtml + '</div>');
        this.headBodyalert = $('<div class="Capacity_alertouter"></div>');
        this.headBodyalert.appendTo(win.document.body);
        this.headBox.appendTo(win.document.body);
    };
    //事件绑定
    EnterDialog.bindEvent = function () {
        $(".Capacity_alertouter").show();
        
        setTimeout(function(){
            $("#Dialog_css").fadeOut(function(){
                $(".Capacity_alertouter").hide(typeof (EnterDialog.callback) == "function" ? EnterDialog.callback : function () { EnterDialog.callback == null ? null : location.href = EnterDialog.callback});
                $("#Dialog_css").remove();
                $(".Capacity_alertouter").remove();
            });
            
        },1000);
        $(document).keydown(function (e) {
            if(e.which == 13){
                return false;
            }
        }); 

        var _BodyWidth = document.body.clientWidth;
        var _BodyHeight = $(window).height();
        var _DialgWidth = $("#Dialog_css").width()+80;
        $(".Dialog_css").css({
            left: (_BodyWidth-_DialgWidth)/2,
            top: _BodyHeight/3
        });
    };

    $.dialog = function (opts) {
        EnterDialog.init(opts);
    }
})(jQuery, window);