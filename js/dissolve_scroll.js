/*global $, window, document */

/* when hamburger opened */
$(window).on("load", function () {
    "use strict";
    
    var half12_flag = true,
        half23_flag = true,
        half34_flag = true;

    /* scroll 시 TOP 애니메이션 설정 */
    $(window).scroll(function () {
        var height = $(document).scrollTop(),
            first_container = $('#first-container').position().top,
            second_minerva = $('#second_minerva').position().top,
            third_column = $('#third_1858column').position().top,
            fourth_reviews = $('#fourth_reviews').position().top,
            half12 = (second_minerva - first_container) / 3,
            half23 = (third_column - second_minerva) / 3 + second_minerva,
            half34 = (fourth_reviews - third_column) / 3 + third_column;
        
        if (height >= half12) {
            // desolve 2 items
            // left-container, minerva_logo, 2_title, 2_text
            if (half12_flag) {
                $('.left-container').children('img').animate({left: "+=100"}, 1000);
                $('.left-container').fadeIn(1000);
                $('#minerva_logo').fadeIn(1000, function () {
                    $('#title_2').fadeIn(1000, function () {
                        $('#text_2').fadeIn(1000, function () {
                            $('#button_2').fadeIn(1500);
                        });
                    });
                });
                half12_flag = false;
            }
        }
        if (height >= half23) {
            if (half23_flag) {
                $('#third_mountain_logo').fadeIn(2000, function () {
                    $('#third_title').fadeIn(1500, function () {
                        $('#third_text').fadeIn(1500, function () {
                            $('#button_3').fadeIn(2000);
                        });
                    });
                });
                half23_flag = false;
            }
        }
        if (height >= half34) {
            if (half34_flag) {
                $('#fourth_11').fadeIn(1000, function () {
                    $('#fourth_12').fadeIn(1000, function () {
                        $('#fourth_21').fadeIn(1000, function () {
                            $('#fourth_22').fadeIn(1000);
                        });
                    });
                });
                half34_flag = false;
            }
        }
    });
});