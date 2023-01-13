var scrollSW = 1;

$('.video-content').click(function(){
    var idx= $(this).index();
    var videos = $('.video-list iframe.vimeo')
    var thisVideo = $('.video-list').eq(idx).find('iframe.vimeo')
    var playerToPause = new Vimeo.Player(videos)
    var playerToPlay = new Vimeo.Player(thisVideo)

    playerToPause.unload()
    playerToPlay.play()
    $('.video-popup').addClass('on')
    $('.video-popup .videoWrap .video-list').removeClass('on')
    $('.video-popup .videoWrap .video-list').eq(idx).addClass('on')
})


$('.videoWrap').click(function(){
    var videos = $('.video-list iframe.vimeo')
    var playerToPause = new Vimeo.Player(videos)

    $('.video-popup').removeClass('on')
    $('.video-popup .videoWrap .video-list').removeClass('on')
    playerToPause.unload()
})