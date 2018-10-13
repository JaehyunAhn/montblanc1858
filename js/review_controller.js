/*global $, window, document */

/* when hamburger opened */
$(window).on("load", function () {
    "use strict";
    var image1 = $('#review_image1'),
        image2 = $('#review_image2'),
        image3 = $('#review_image3');
    image1.css('opacity', 0.1);
    image2.css('opacity', 0.1);
    image3.css('opacity', 0.1);
    
    // reset
    $("#close_review").click(function () {
        $('#review').fadeOut(300);
        image1.css('opacity', 0.1);
        image2.css('opacity', 0.1);
        image3.show();
        image3.css('opacity', 0.1);
    });
    
    $("#review11").click(function () {
        image1.attr('src', './images/fourth_4watches/r1-1.png');
        image2.attr('src', './images/fourth_4watches/r1-2.png');
        image3.attr('src', '');
        image3.hide();
        // image cascade fadein
        $('#review').fadeIn(300);
        image1.animate({opacity: 1}, 800);
        image2.animate({opacity: 1}, 1200);
        image3.animate({opacity: 1}, 1600);
        
        $('#review_title').text('title1');
        $('#review_text').text('content1');
        $('#review_button').attr('href', 'http://naver.com');
    });
    
    $("#review12").click(function () {
        image1.attr('src', './images/fourth_4watches/r2-1.png');
        image2.attr('src', './images/fourth_4watches/r2-2.png');
        image3.attr('src', './images/fourth_4watches/r2-3.png');
        // image cascade fadein
        $('#review').fadeIn(300);
        image1.animate({opacity: 1}, 800);
        image2.animate({opacity: 1}, 1200);
        image3.animate({opacity: 1}, 1600);
    });
    
    $("#review21").click(function () {
        image1.attr('src', './images/fourth_4watches/r4-1.png');
        image2.attr('src', './images/fourth_4watches/r4-2.png');
        image3.attr('src', './images/fourth_4watches/r4-3.png');
        // image cascade fadein
        $('#review').fadeIn(300);
        image1.animate({opacity: 1}, 800);
        image2.animate({opacity: 1}, 1200);
        image3.animate({opacity: 1}, 1600);
    });
    
    $("#review22").click(function () {
        image1.attr('src', './images/fourth_4watches/r3-1.png');
        image2.attr('src', './images/fourth_4watches/r3-2.png');
        image3.attr('src', '');
        image3.hide();
        // image cascade fadein
        $('#review').fadeIn(300);
        image1.animate({opacity: 1}, 800);
        image2.animate({opacity: 1}, 1200);
        image3.animate({opacity: 1}, 1600);
    });
});