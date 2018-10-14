/*global $, window, document */

/* when hamburger opened */
$(window).on("load", function () {
    "use strict";
    
    var half12_flag = true,
        half23_flag = true,
        half34_flag = true,
        half45_flag = true,
        half45_2_flag = true;

    /* scroll 시 TOP 애니메이션 설정 */
    $(window).scroll(function () {
        var height = $(document).scrollTop(),
            first_container = $('#first-container').position().top,
            second_minerva = $('#second_minerva').position().top,
            third_column = $('#third_1858column').position().top,
            fourth_reviews = $('#fourth_reviews').position().top,
            fifth_detail = $('#fifth_detail_view').position().top,
            fifth_second = $('#detail_wrap2').position().top,
            half12 = (second_minerva - first_container) / 3,
            half23 = (third_column - second_minerva) / 3 + second_minerva,
            half34 = (fourth_reviews - third_column) / 3 + third_column,
            half45 = (fifth_detail - fourth_reviews) / 4 + fourth_reviews,
            half45_2 = (fifth_second - fifth_detail) / 4 + fifth_detail;
        
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
        if (height >= half45) {
            if (half45_flag) {
                $('#fifth_front').fadeTo(2000, 0.4, function () {});
                $('#fifth_front_desc').fadeIn(2000, function () {
                    // flip animation works this helps user understand its animation
                    $('#df1, #df2, #df3, #df4').flip(true);
                });
                half45_flag = false;
            }
        }
        if (height >= half45_2) {
            if (half45_2_flag) {
                $('#fifth_back').fadeTo(2000, 0.4, function () {});
                $('#fifth_back_desc').fadeIn(2000, function () {
                    // flip animation works this helps user understand its animation
                    $('#db1, #db2, #db3, #db4, #db5, #db6').flip(true);
                });
                half45_2_flag = false;
            }
        }
    });
});