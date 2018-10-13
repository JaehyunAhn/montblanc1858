/*global $, window, document */

/* when hamburger opened */
$(window).on("load", function () {
    "use strict";
    $("#close_review").click(function () {
        $('#review').fadeOut(300);
    });
    
    $("#review11").click(function () {
        $('#review_image').attr('src', '');
        $('#review_title').text('title1');
        $('#review_text').text('content1');
        $('#review_button').attr('href', 'http://naver.com');
        $('#review').fadeIn(300);
    });
    
    $("#review12").click(function () {
        $('#review').fadeIn(300);
    });
    
    $("#review21").click(function () {
        $('#review').fadeIn(300);
    });
    
    $("#review22").click(function () {
        $('#review').fadeIn(300);
    });
});