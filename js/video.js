/**
 * Created by sogo on 17/09/2017.
 */

$(window).on("load", function(){
    var video_source = document.querySelector('video');
    var video_storage = [
        './video/movie1_conv.mp4',
        './video/movie2.mp4',
        './video/movie3.mp4',
    ];

    var active_video_url = video_storage[Math.round(Math.random()*(video_storage.length -1))];

    if(video_source.canPlayType('video/mp4;')) {
        video_source.setAttribute('src', active_video_url);
        console.log(active_video_url + ' were playing.');
    }

    if (navigator.userAgent.match(/(iPod|iPhone)/)) {
        // 에이전트가 아이폰이면 리소스를 넣지 않습니다
    }
    else {
        // 에이전트가 아이폰이 아닐 경우
    }

});