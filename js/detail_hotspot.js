/*global $, window, document */

/* when hamburger opened */
$(window).on("load", function () {
    "use strict";
    $('#df1, #df2, #df3, #df4, #db1, #db2, #db3, #db4, #db5').flip({
        'axis': 'y'
    });
});