/*global $, window, document */

/* when hamburger opened */
$(window).on("load", function () {
    "use strict";
    
    var front_img = $('#fifth_front').position(),
        back_img = $('#fifth_back').position();
    
    $('#fifth_front_wrap').hotspot({
        mode: 'display',
        data: [
            { "x": front_img.left + 10, "y": front_img.top + 38, "Title":"The Title","Message":"Create the Message here" },
            { "x":43, "y":40, "Title":"jQuery Hotspot","Message":"This jQuery Plugin lets you create hotspot to any HTML element." }
        ],
        interactivity: "hover", // options : click, none (default is hover)
    });
});