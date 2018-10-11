/*global $, window, document */

/* when hamburger opened */
$(window).on("load", function () {
    "use strict";
    $("#close_review").click(function () {
        $('#review').addClass('disp_none');
    });
    
    $("#review11").click(function () {
        $('#review').removeClass('disp_none');
    });
    
    $("#review12").click(function () {
        $('#review').removeClass('disp_none');
    });
    
    $("#review21").click(function () {
        $('#review').removeClass('disp_none');
    });
    
    $("#review22").click(function () {
        $('#review').removeClass('disp_none');
    });
});