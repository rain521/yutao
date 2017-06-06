(function ($, win) {
    //自定义弹窗对象
    var EnterDialog = {};

    //初始化弹窗
    EnterDialog.init = function (opts) {
        this.setOptions(opts);
        this.box();
        this.bindEvent();
        return this;
    };
    //初始化设置
    EnterDialog.setOptions = function (opts) {
        opts = $.extend(true, {
            plot: "alertv",
            h3: "",
            span: "",
            callback: null,
            callbackCancel: null
        }, opts);

        $.extend(true, this, opts);
    };
    //渲染弹窗
    EnterDialog.box = function () {
        this.headBox = $('<div class="Capacity_couformwithin">' +
                '<div class="CapacityS">' +
                    '<div class="CapacityS_head">' +
                        '<span class="CapacityS_cancel">×</span>' +
                    '</div>' +
                    '<div class="CapacityS_body">' +
                        '<img src="../../Content/images/' + EnterDialog.plot + '.png" alt="">' +
                        '<h3>'+ EnterDialog.h3 +'</h3>'+
                        '<span>'+EnterDialog.span+'</span>'+
                    '</div>' +

                    '<div class="CapacityS_foot">' +
                        '<a href="javascript:;" class="CapacityS_cancel CapacityS_btn" id="Capacity_Yes">确定</a><a href="javascript:;" class="CapacityS_cancel CapacityS_btnX">取消</a>' +
                    '</div>' +
                '</div>' +
            '</div>');
        this.headBody = $('<div class="Capacity_couformouter"></div>');
        this.headBox.appendTo(win.document.body);
        this.headBody.appendTo(win.document.body);
    };
    //事件绑定
    EnterDialog.bindEvent = function () {
        //        $(".CapacityOpen_couform").click(function(){
        var _BodyHeight = $(window).height();
        $(".Capacity_couformouter").show();
        $(".Capacity_couformwithin").show().animate({
            top: _BodyHeight/4,
            opacity: '1',
            filter: 'Alpha(opacity=100)'
        }, 300,function(){
            $(".CapacityS_head").css({
                width:$(".Capacity_couformwithin").width()
            });
            $(".CapacityS_foot").css({
                width:$(".Capacity_couformwithin").width()
            });
        });
        //        });
        $(".CapacityS_cancel").click(function () {
            $(".Capacity_couformwithin").animate({
                top: _BodyHeight/4 - "30",
                opacity: '0',
                filter: 'Alpha(opacity=0)'
            }, 300, function () {
                $(".Capacity_couformwithin").remove();
                $(".Capacity_couformouter").remove();
            });
        });
        $("#Capacity_Yes").click(EnterDialog.callback);
        $(".CapacityS_btnX").click(EnterDialog.callbackCancel);
        

        var _bodyW = $(window).width();
        var _capacityW = $(".Capacity_couformwithin").width();
        $(".Capacity_couformwithin").css({
            left:(_bodyW-_capacityW)/2
        });
        $(document).keydown(function (e) {
            if(e.which == 13){
                return false;
            }
        }); 
        
        $(".CapacityS_head").css("width",_capacityW);
        $(".CapacityS_foot").css("width",_capacityW);
    };

    $.confirm = function (opts) {
        EnterDialog.init(opts);
    }
})(jQuery, window);