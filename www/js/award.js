$(window).ready(function(){
    var winW = $(window).width();
    // poster content==================================================
    var posterBW = $('.poster-bg').width();
    var galleryBW = $('.gallery-bg').width();
    var posterL = $('.poster-content').length;
    $('.poster-bg').height(posterBW*0.7);//Fit the ratio by width
    $('.gallery-bg').height(galleryBW*0.7);//Fit the ratio by width
    for(i=3;i<=posterL;i++){//for start!
        $('.poster-content').eq(i).addClass('hide');//Hide all poster-content after 4th
    }//for end!
    function readySize(){//Fit values according to window length start!
        if(winW>675){//if mobile
            $('.poster-bg').height(posterBW*0.7);//Fit the ratio by width
        }else if(winW<=675){//else if pc
            $('.poster-bg').height(posterBW*1.3);//Fit the ratio by width
        }//if end!
    }//redaySize end!
    readySize();
// resizing==================================================
    var resizeSW=1//resizing cooldown switch

    $(window).resize(function(){
        winW = $(window).width();
        if(resizeSW==1){//if resizing cooldown switch is on
            resizeSW=0;//turn off the cooldown switch
            if(winW>675){//if pc
                posterBW = $('.poster-bg').width()
                galleryBW = $('.gallery-bg').width()
                $('.poster-bg').height(posterBW*0.7);
                $('.gallery-bg').height(galleryBW*0.7);
                $('.gallery-wrap').height($('.gallery-list.on').height())
                setTimeout(function(){//cooldown switch on
                    resizeSW=1;
                },10)//setTimeout end!
            }else if(winW<=675){//if mobile
                posterBW = $('.poster-bg').width()
                galleryBW = $('.gallery-bg').width()
                $('.poster-bg').height(posterBW*1.3);
                $('.gallery-bg').height(galleryBW*0.7);
                $('.gallery-wrap').height($('.gallery-list.on').height())
                setTimeout(function(){//cooldown switch on
                    resizeSW=1;
                },10)//setTimeout end!
            }//if winW end!
        }//if resizeSW end!
    })//resize end!
// history==========================================================
    $('.thisYear').click(function(){
        $(this).toggleClass('on')
        $('.year-wrap').stop().slideToggle(200);
    })//click end!
    $('.year-list').click(function(){
        var text = $(this).find('p').text();//choose showing number
        var idx = $(this).index();
        $('.year-wrap').slideUp(200)
        $('.thisYear .pp').text(text)//c&p the showing number from $this
        $('.gallery-list').removeClass('on')
        $('.gallery-list').eq(idx).addClass('on')
        $('.gallery-wrap').height($('.gallery-list.on').height())
    })///click end!

    $('.gallery-wrap').height($('.gallery-list.on').height());
    var count = 3;//showing poster-contents are 3 at first, when click the more-button, it increase 3.
    $('.more-btn').click(function(){
        for(i=count;i<count+3;i++){//show more 3 gallery-list after
            $('.poster-content').eq(i).removeClass('hide')
        }//for end!
        count =  count+3;//show more 3 gallery-list after click this button
        var thisL = (posterL + 2)//3 gallery-lists at 1 line, so plus at least 2 to poster-length
        if(count >= thisL){//if the count number over the poster-length(+2), fade out this button
            $('.more-btn').fadeOut()
        }//if end!
    })//more-btn click end!
    $('.row2 .row2-container .exp-content').click(function(){
        var idx = $(this).attr("data-year-num")
        console.log(idx)
        var text = $('.year-list').eq(idx).find('p').text();
        if(idx>=0){
            $('.thisYear').removeClass('on')
            $('.year-wrap').slideUp(200);
            $('.thisYear .pp').text(text)
            $('.gallery-list').removeClass('on')
            $('.gallery-list').eq(idx).addClass('on')
            $('.gallery-wrap').height($('.gallery-list.on').height())
            $('html, body').animate({scrollTop: '0'}, 300);
        }
    })
// gnb==================================================
$('.gnb-list a').mouseenter(function(){
    var li = $(this).closest('.gnb-list')
    li.find('.line').addClass('hover')
})//gnb-list a mouseenter end!
$('.gnb-list a').mouseleave(function(){
    var li = $(this).closest('.gnb-list')
    li.find('.line').removeClass('hover')
})//gnb-list a mouseleave end!
// gnb-mobile============================================
$('.gnb-mobile .this').click(function(){
    $('.gnb-mobile .others').stop().slideToggle(200)
})//gnb-mobile .this click end!
$('.gnb-mobile .others').click(function(){
    $(this).css({"display":"none"})
})//gnb-mobile .others click end!
// awardPopup==============================================
$('.gallery-bg').click(function(){
    $('.thumb-popup').addClass('on')
    $('.thumb-popup .thumb-bg').empty()//make empty this block
    $('.thumb-popup .thumb-text').empty()//make empty this block
    $(this).find('img').clone().appendTo('.thumb-popup .thumb-container .thumb-bg')//find the img and paste to this block
    $(this).closest('.gallery-content').find('.p1').clone().appendTo('.thumb-popup .thumb-container .thumb-text')//same
    $(this).closest('.gallery-content').find('.p2').clone().appendTo('.thumb-popup .thumb-container .thumb-text')//same
    $(this).closest('.gallery-content').find('.p3').clone().appendTo('.thumb-popup .thumb-container .thumb-text')//same
})//gallery-bg click end!

$('.poster-bg').click(function(){
    $('.thumb-popup').addClass('on')
    $('.thumb-popup .thumb-bg').empty()//make empty this block
    $('.thumb-popup .thumb-text').empty()//make empty this block
    $(this).find('img').clone().appendTo('.thumb-popup .thumb-container .thumb-bg')//find the img and paste to this block
    $(this).closest('.poster-content').find('h4').clone().appendTo('.thumb-popup .thumb-container .thumb-text')//same
})//poster-bg click end!

$('.thumb-popup').click(function(){
    $(this).removeClass('on')//switch off the full-screen popup
})//thumb-popup click end!

$('.thumb-popup').on('scroll touchmove mousewheel', function(e){
    e.preventDefault();
    e.stopPropagation(); 
    return false;
    //seal off mousewheel when popup is switch on
})//thumb-popup scroll end!

// award animation===========================================
$('.ready').each(function(e){
    var $this = $(this)
    console.log(e)
    setTimeout(function(){
        $this.addClass('on')
    },e*200)
})//ready each end!
// scrolling==================================================
$(window).scroll(function(){
    var winH = $(window).height()/1.2,
    winBot = $(window).scrollTop() + winH,
    winTop = $(window).scrollTop(),
    scrollEle = $('.scroll-content');
    scrollEle.each(function(){
        var eleY = $(this).offset().top
        if(eleY<winBot){
            $(this).addClass('opac1')
            $(this).addClass('transUp')
        }else if(eleY>winTop){
            $(this).removeClass('opac1')
            $(this).removeClass('transUp')
        }
    })
})
})