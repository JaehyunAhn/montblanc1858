/*global $, window, document */

/* when hamburger opened */
$(window).on("load", function () {
    "use strict";
    get_hotspots();
    $(window).resize(function() {
        get_hotspots();
    });
});
    
function get_hotspots () {
    
}