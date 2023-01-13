var mainBnrSW = 1;
function mainBnr(){
    if(mainBnrSW==1){
        setInterval(function(){
            $('.slide-wrap').animate({"left":"-100%"},function(){
                $('.slide-list').eq(0).appendTo('.slide-wrap')
                $('.slide-wrap').css({"left":"0%"})
            })
        },1000)
    }
}
mainBnr();