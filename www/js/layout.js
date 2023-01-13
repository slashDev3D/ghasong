$(window).ready(function(){
$('.top').click(function(){
    $(window).scrollTop(0)
})
$('footer .windowWrap .row1 .w1200 ul li').eq(2).css({"display":"none"})
$('footer .windowWrap .row1 .w1200 ul li.bold a').text('개인정보처리방침 및 이용약관')
$('footer .windowWrap .row1 .w1200 ul li.bold a').attr({"href":"/personal.html"})
$('footer .copyright').text('copyright © GHASONG ART AWARD. all rights reserved.')
// $('.sites').find('img').css({"display":"none"})
$('.sites .site-list').click(function(){
    var idx = $(this).index();
    if(idx==0){
        window.location.href = 'http://www.dong-wha.co.kr'
    }
})
$('.sitesName').click(function(){
    $(this).closest('.sites').find('.siteWrap').stop().slideToggle(200)
})
$('.navMenu .art').on({
    click:function(){
        console.log('click')
    },
    mouseenter:function(){
        $('.art-sub').stop().fadeIn(300)
    },
    mouseleave:function(){
        $('.art-sub').stop().fadeOut(300)
    }
})
$('.navMenu .art .art-sub li').on({
    mouseenter:function(){
        $(this).children('a').addClass('addMainColor')
    },
    mouseleave:function(){
        $(this).children('a').removeClass('addMainColor')
    }
})
$('.navMenu .art .art-sub li.lv1').on({
    mouseenter:function(){
        $('.lv2').stop().fadeIn();
    },
    mouseleave:function(){
        $('.lv2').stop().fadeOut();
    }
})

$('aside').on('scroll touchmove mousewheel', function(e){
    e.preventDefault();
    e.stopPropagation(); 
    return false;
})
$('.asideMain .asideMenu .lv2-open').click(function(){
    $(this).find('img').toggleClass('rotate')
    $('.asideMain .asideMenu .lv2').stop().slideToggle(100)
})
$('.navHam').click(function(){
    $('aside').addClass('on')
})
$('aside .close').click(function(){
    $('aside').removeClass('on')
})
$(window).scroll(function(){
    var winT = $(window).scrollTop()
    if(winT<=100){
        $('.top').removeClass('appear')
    }else{
        $('.top').addClass('appear')
    }

    if(10<=winT){
        $('nav').addClass('shadow')
    }else{
        $('nav').removeClass('shadow')
    }
})
$(window).resize(function(){
    var winW = $(window).width();
    if(winW>1260){
        $('aside').removeClass('on')
    }
})
// function mediaConBg(){
//     var length1 = $('.video-content').length;
//     var length2 = $('.vr-content').length;
//     for(i=0;i<=length1;i++){
//         if(i<=8){
//             $('.video-content').eq(i).find('.thumb').css({"background-image":"url(/img/video_thumb0" + (i+1) + ".jpg)"})
//         }else if(9<=i && i<=18){
//             $('.video-content').eq(i).find('.thumb').css({"background-image":"url(/img/video_thumb" + (i+1) + ".jpg)"})
//         }
//     }
//     for(i=0;i<=length2;i++){
//         if(i<=8){
//             $('.vr-content').eq(i).find('.thumb').css({"background-image":"url(/img/vr_thumb0" + (i+1) + ".jpg)"})
//         }else if(9<=i && i<=18){
//             $('.vr-content').eq(i).find('.thumb').css({"background-image":"url(/img/vr_thumb" + (i+1) + ".jpg)"})
//         }
//     }
// }
// mediaConBg();
})