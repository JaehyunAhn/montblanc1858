/*global $, window, document */

/* when hamburger opened */
$(window).on("load", function () {
    "use strict";
    $('#hamburger').click(function () {
        $('#hamburger').toggleClass('open');
    });
    
    var half12_flag = true;

    /* scroll 시 TOP 애니메이션 설정 */
    $(window).scroll(function () {
        var height = $(document).scrollTop(),
            first_container = $('#first-container').position().top,
            second_minerva = $('#second_minerva').position().top,
            half12 = (second_minerva - first_container) / 3;
        
        if (height >= half12) {
            // desolve 2 items
            // left-container, minerva_logo, 2_title, 2_text
            if (half12_flag) {
                $('.left-container').children('img').animate({left: "+=100"}, 1000);
                half12_flag = false;
            }
            
            $('.left-container').fadeIn(1000);
            $('#minerva_logo').fadeIn(1000, function () {
                $('#title_2').fadeIn(1000, function () {
                    $('#text_2').fadeIn(1000, function () {
                        $('#button_2').fadeIn(1500);
                    });
                });
            });
        }
    });
});