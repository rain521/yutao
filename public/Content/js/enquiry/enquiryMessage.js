(function ($) {
    var orderContainer = function () {
        this.init = function () {
            this.orderContent();
            this.bindEvent();
        };
        this.orderContent = function () {
            var grContainer = $('#grContainer');
            //返回数据
            var data = [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '0',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
                '23',
                '24',
                '25',
                '26',
                '27',
                '28',
                '29',
                '30',
                '31',
                '32',
                '33',
                '34',
                '35',
                '36',
                '37'
            ];
            var pageSize = 10; //每页出现的数据量
            //模拟渲染
            var render = function (curr) {
                //此处只是演示，实际场景通常是返回已经当前页已经分组好的数据
                var content = '';
                var last = curr * pageSize - 1;
                last = last >= data.length ? (data.length - 1) : last;
                for (var i = (curr * pageSize - pageSize); i <= last; i++) {
                    content += ' <tr> ' +
                        '<td><a class="max-width" href="enquiryDetails.html">纸塑料复合食品级口袋纸塑料复合食品级口袋</a></td> ' +
                        '<td>纸塑料复合</td> ' +
                        '<td>上油</td> ' +
                        '<td><span class="color1">10000</span>条</td> ' +
                        '<td><span class="color1">10</span>天</td> ' +
                        '<td><span class="color1">100</span>天</td> ' +
                        '<td><span class="color1">1</span>条</td> ' +
                        '<td>100</td> ' +
                        '<td>广东广州</td> ' +
                        '<td class="operation"> ' +
                        '<a class="push-button" href="enquiryDetailsTest.html">立刻报价</a> ' +
                        '</td> ' +
                        '</tr>';
                }
                return content;
            };
            //调用分页
            laypage({
                cont: 'paging',
                pages: Math.ceil(data.length / pageSize), //得到总页数
                skin: '#c00',
                skip:true,
                jump: function (obj,first) {
                    grContainer.html(render(obj.curr));
                }
            });
        };
        this.bindEvent = function () {
            var allScreen = $('#allScreen');//筛选条件
            var ProvinceBox = $('#ProvinceBox');
            var bagPagAll = $('#bagPagAll');
            allScreen.find('li').hover(function () {
                var $this = $(this);
                if($this.index() == 1){
                    $this.find(ProvinceBox).show();
                    $this.find(ProvinceBox).on('click','li',function () {
                        var thisHtml = $(this).text();
                        $this.find('.borderLeft').text(thisHtml);
                    })
                }
                if($this.index() == 2){
                    $this.find(bagPagAll).show();
                    $this.find(bagPagAll).on('click','li',function () {
                        var thisHtml = $(this).text();
                        $this.find('.borderLeft').text(thisHtml);
                    })
                }
            },function () {
                var $this = $(this);
                $this.find(ProvinceBox).hide();
                $this.find(bagPagAll).hide();
            });
        }
    };
    $(document).ready(function () {
        var orderMessage = new orderContainer();
        orderMessage.init();
    })
})(jQuery);