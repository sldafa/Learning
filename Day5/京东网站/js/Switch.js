$(document).ready(function () {
    //TODO 搜索框

    $('#serach .sou .sousuo input.kuang')
        .val('iPhone X')
        .focus(function () {
        $(this).val('');
    })
        .blur(function () {
        $(this).val('iPhone X');
    });


    //TODO 京东小金库和七日年化图片定时切换

    var dhtuIndex = 1;

    setInterval(function () {
        $('#daohang .dhright .dhtu ul li').eq(dhtuIndex).addClass('on').
        siblings().removeClass('on');

        dhtuIndex = dhtuIndex ? 0 : 1;
    }, 2000);
    
    
    //TODO 浏览商品区域右侧 >
    
    $('#main .mainleft .liulan .liuright').hover(
        function () {
            $('#main .mainleft .liulan .liuright .righttu').css({
                'background-position': '5px -42px',
                'background-image' : 'url(images/15.png)'
            });

            $(this).css({
                'background-color' : '#f3f3f3'
            });


        },
        function () {
            $('#main .mainleft .liulan .liuright .righttu').css({
                'background-position': '-50px -51px',
                'background-image' : 'url(images/16.png)'
            });

            $(this).css({'background-color' : '#fff'});
        }
    );


});
