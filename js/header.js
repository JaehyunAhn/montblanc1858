/*global $, window, console, document */

/* when hamburger opened */
$(window).on("load", function () {
    "use strict";
    $('#hamburger').click(function () {
        $('#hamburger').toggleClass('open');
    });

    /* scroll 시 TOP 애니메이션 설정 */
    $(window).scroll(function () {
        var height = $(document).scrollTop();
        if (height <= 40) {
            $('#header-container').removeClass('active');
        } else {
            $('#header-container').addClass('active');
        }
    });
});