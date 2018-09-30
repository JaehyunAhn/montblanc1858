/*global $, window, document, console */

/* when hamburger opened */
$(window).on("load", function () {
    "use strict";
    $('#hamburger').click(function () {
        $('#hamburger').toggleClass('open');
    });

    /* scroll 시 TOP 애니메이션 설정 */
    $(window).scroll(function () {
        var height = $(document).scrollTop();
        var first_container = $('#first-container').position().top;
        var second_minerva = $('#second_minerva').position().top;
        var half12 = (second_minerva - first_container) / 3;
        
        if (height >= half12) {
            // desolve 2 items
            // left-container, minerva_logo, 2_title, 2_text
            $('.left-container').fadeIn(1000);
            $('#minerva_logo').fadeIn(1000, function() {
               $('#title_2').fadeIn(1000, function() {
                   $('#text_2').fadeIn(1000, function() {
                      $('#button_2').fadeIn(1500); 
                   });
                }); 
            });        
        }
    });
});