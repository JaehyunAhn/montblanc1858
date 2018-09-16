/*global $, window */

$(window).on("load", function () {
    "use strict";
    $('#hamburger').click(function () {
        $('#hamburger').toggleClass('open');
    });
});