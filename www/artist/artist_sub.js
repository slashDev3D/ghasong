$(window).ready(function(){
    //scroll============================================================
    $(window).scroll(function(){
        var winH = $(window).height()/1.2;
        var winBot = $(window).scrollTop() + winH;
        var winTop = $(window).scrollTop();
        var scrollEle = $('.row');
        scrollEle.each(function(){
            var eleY = $(this).offset().top;
            if(eleY<winBot){
                $(this).addClass('opac1');
                $(this).addClass('transUp');
            }else if(eleY>winTop){
                $(this).removeClass('opac1');
                $(this).removeClass('transUp');
            }
        });
    })//scroll==========================================================
    // more-btn-controll================================================
    var aslistL = $('.artist-sample-list').length;
    for(i=4;i<=aslistL;i++){//hide all poster-content after 4th
        $('.artist-sample-list').eq(i).addClass('hide');
    }
    var count = 4;
    $('.artist-sample-more-container').click(function(){
        for(i=count;i<count+4;i++){
            $('.artist-sample-list').eq(i).removeClass('hide');
        }
        count = count+4;
        if(count>=aslistL-4){
            $('.artist-sample-more-container').fadeOut();
        }
    })// more-btn-controll==============================================
    // Popup============================================================
    $('.artist-sample-list').click(function(){
        var idx = $(this).index();
        var p1T = $(this).find('.p1').text();
        var p2T = $(this).find('.p2').text();
        var p3T = $(this).find('.p3').text();

        $('.thumbPopup-container').addClass('on');
        $('.thumbPopup-container .thumbPopup-list').removeClass('on');
        $('.thumbPopup-container .thumbPopup-list').eq(idx).addClass('on');
        $('.thumbPopup-container .thumbPopup-list').eq(idx).find('.p1').text(p1T);
        $('.thumbPopup-container .thumbPopup-list').eq(idx).find('.p2').text(p2T);
        $('.thumbPopup-container .thumbPopup-list').eq(idx).find('.p3').text(p3T);
    })//on=====
    $('.thumbPopup-container').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation(); 
        return false;
    })//lock scroll==
    $('.thumbPopup-container').click(function(){
        $(this).removeClass('on');
    })//off=====
})