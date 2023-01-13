$('div.artistWrap').mouseenter(function(){
    $('.artist-thumb').stop().fadeIn();
})
$('.artistWrap').mouseleave(function(){
    $('.artist-thumb').stop().fadeOut();
})
$('.artistWrap').mousemove(function(event){
        var x = event.pageX,
            y = event.pageY;  
        $('.artist-thumb').css({"left":x+"px","top":y+"px"}); 
})
$('.artistWrap .artist-list').mouseenter(function(){
    idx = $(this).index();
    $('.artist-thumb').find('.thumb-list').removeClass('on');
    $('.artist-thumb').find('.thumb-list').eq(idx).addClass('on');
})
function makeThumbBg(){
    var length = $('.thumb-list').length;
        for(i=1;i<=length;i++){
            if(i<=9){
                $('.thumb-list').eq(i-1).css({"background-image":"url(/img/artist_thumb0" + i + ".jpg)"})
            }else if(10<=i && i<=19){
                $('.thumb-list').eq(i-1).css({"background-image":"url(/img/artist_thumb" + i + ".jpg)"})
            }
        }
}
makeThumbBg();
function listOn(){
    var l = $('.artist-list').length
    $('.artist-list').each(function(e){
        var idx = $(this).index()
        setTimeout(function(){
            $('.artist-list').eq(idx).addClass('on')
        },100*idx)
    })
}
setTimeout(function(){
    $('.artist-Eng, .artist-Kor, .line, .artist-number').css({"transition-duration":"1s"})
    listOn()
},300)