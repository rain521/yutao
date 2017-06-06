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
            callback: null
        }, opts);

        $.extend(true, this, opts);
    };
    //渲染弹窗
    EnterDialog.box = function () {
        this.headBoxalert = $('<div class="Capacity_alertwithin">' +
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
            '<a href="javascript:;" class="CapacityS_cancel CapacityS_btn">确定</a>' +
            '</div>' +
            '</div>' +
            '</div>');
        this.headBodyalert = $('<div class="Capacity_alertouter"></div>');
        this.headBoxalert.appendTo(win.document.body);
        this.headBodyalert.appendTo(win.document.body);
    };
    //事件绑定
    EnterDialog.bindEvent = function () {
        //        $(".CapacityOpen_alert").click(function(){

        var _BodyHeight = $(window).height();
        $(".Capacity_alertouter").show();
        $(".Capacity_alertwithin").show().animate({
            top: _BodyHeight / 4,
            opacity: '1',
            filter: 'Alpha(opacity=100)'
        }, 300);
        $(".CapacityS_cancel").click(function () {
            $(".Capacity_alertwithin").animate({
                top: _BodyHeight / 4 - "30",
                opacity: '0',
                filter: 'Alpha(opacity=0)'
            }, 300, function () {
                $(".Capacity_alertwithin").remove();
                $(".Capacity_alertouter").remove();
            });
        });
        $(".CapacityS_btn").click(EnterDialog.callback);

        var _bodyW = $(window).width();
        var _capacityW = $(".Capacity_alertwithin").width() + 40;
        $(".Capacity_alertwithin").css({
            left: (_bodyW - _capacityW) / 2
        });
        $(document).keydown(function (e) {
            if (e.which == 13) {
                return false;
            }
        });

        $(".CapacityS_head").css("width",_capacityW);
        $(".CapacityS_foot").css("width",_capacityW);
    };

    $.alert = function (opts) {
        EnterDialog.init(opts);
    };
})(jQuery, window);