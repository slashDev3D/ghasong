$(document).ready(function(){
    setTimeout(function(){
        $('.mainBnr1').find('.slide1 .text').addClass('on')
        console.log('hihi')
    },100)
    var mainBnr2Divide;
    var mainBnr2DividePer;
    var windowW = $(window).width();
    var $mainBnr1 = $('.mainBnr1');
    var mainBnr1W = $mainBnr1.width();
    $mainBnr1.height(mainBnr1W/2.457142857);
    function mainBnr2_reset(){
        console.log(windowW)
        if(windowW<=660){
            mainBnr2Divide=2;
            mainBnr2DividePer = 500;
            mainBnr1W = $mainBnr1.width();
            $mainBnr1.height(473);
        }else if(windowW<=900 && windowW > 660){
            mainBnr2Divide=2;
            mainBnr2DividePer = 500;
            mainBnr1W = $mainBnr1.width();
            $mainBnr1.height(mainBnr1W/2);
        }else if(windowW<=1262 && windowW > 900){
            mainBnr2Divide=4;
            mainBnr2DividePer = 250;
            mainBnr1W = $mainBnr1.width();
            $mainBnr1.height(mainBnr1W/2.457142857);
        }else if(windowW > 1262){
            mainBnr2Divide=4;
            mainBnr2DividePer = 250;
            mainBnr1W = $mainBnr1.width();
            $mainBnr1.height(700);
        }
    }
    mainBnr2_reset()
    var mainBnr2DividePer = 1000/mainBnr2Divide;
    var $mainBnr2 = $('.mainBnr2')
    var $mainBnr2W = $mainBnr2.width()
    var $mainBnr2List = $('.mainBnr2 ul li')
    var $mainBnr2ListL = $mainBnr2List.length
    $mainBnr2List.width( $mainBnr2W / mainBnr2Divide )//분할결정
    var $mainBnr2ListW = $mainBnr2List.width()
    var $mainBnr2Ul = $('.mainBnr2 ul')
    $mainBnr2Ul.width($mainBnr2ListW * $mainBnr2ListL)
    $mainBnr2.height($mainBnr2ListW * 1.1)

// resize==============================================================
$(window).resize(function(){
    mainBnr2_reset()
    windowW = $(window).width();
    $mainBnr2W = $mainBnr2.width()
    $mainBnr2List.width( $mainBnr2W / mainBnr2Divide )//분할결정
    $mainBnr2ListW = $mainBnr2List.width()
    $mainBnr2Ul.width($mainBnr2ListW * $mainBnr2ListL)
    $mainBnr2.height($mainBnr2ListW * 1.1)
})
// mainBnr2==============================================================
    var mainBnr2Interval = 0;
    var mainBnr2Loop = setInterval(function(){
        if(mainBnr2Interval<=mainBnr2DividePer){
            mainBnr2Interval = mainBnr2Interval+1
            $mainBnr2Ul.css({"left":"-=0.1%"})
        }else if(mainBnr2Interval>mainBnr2DividePer){
            mainBnr2Interval = 0;
            $mainBnr2Ul.css({"left":"0%"})
            $('.mainBnr2 ul li:first').appendTo($mainBnr2Ul)
        }
    },20)
    $mainBnr2Ul.mouseenter(function(){
        clearInterval(mainBnr2Loop)
    })
    $mainBnr2Ul.mouseleave(function(){
        mainBnr2Loop = setInterval(function(){
            if(mainBnr2Interval<=mainBnr2DividePer){
                mainBnr2Interval = mainBnr2Interval+1
                $mainBnr2Ul.css({"left":"-=0.1%"})
            }else if(mainBnr2Interval>mainBnr2DividePer){
                mainBnr2Interval = 0;
                $mainBnr2Ul.css({"left":"0%"})
                $('.mainBnr2 ul li:first').appendTo($mainBnr2Ul)
            }
        },20)
    })
    $mainBnr2List.click(function(){
        var num = $(this).attr("data-number")
        $('.thumb-popup-container').addClass('on')
        $('.thumb-popup-container .thumb-popup-list').removeClass('on')
        $('.thumb-popup-container .thumb-popup-list').eq(num).addClass('on')
    })
    $('.thumb-popup-container').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation(); 
        return false;
    })
    $('.thumb-popup-container').mouseenter(function(){
        clearInterval(mainBnr2Loop)
    })
    $('.thumb-popup-container').click(function(){
        $(this).removeClass('on')
        mainBnr2Loop = setInterval(function(){
            if(mainBnr2Interval<=mainBnr2DividePer){
                mainBnr2Interval = mainBnr2Interval+1
                $mainBnr2Ul.css({"left":"-=0.1%"})
            }else if(mainBnr2Interval>mainBnr2DividePer){
                mainBnr2Interval = 0;
                $mainBnr2Ul.css({"left":"0%"})
                $('.mainBnr2 ul li:first').appendTo($mainBnr2Ul)
            }
        },20)
    })
})