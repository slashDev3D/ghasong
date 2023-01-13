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