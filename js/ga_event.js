/*global $, window, document, gtag */

/* when hamburger opened */
$(window).on("load", function () {
    "use strict";
    /* 
        to track
        1. movieplay
        2. button_2_1 / 2_2
        3. button_3
        4. review11, 12, 21, 22
        5. fifth_first, fifth_second, (class: front, back)
        6. sixth_promotion
    */
    function sendEvent(eventName, actionCategory) {
        $(eventName).click(function () {
            gtag('event', 'page_view', {
                'event_label': eventName,
                'event_category': actionCategory,
                'value': 'click'
            });
        });
    }
    $('#movieplay').click(function () {sendEvent('movieplay', 'external'); });
    $('#button_2_1').click(function () {sendEvent('minerva1', 'external'); });
    $('#button_2_2').click(function () {sendEvent('minerva2', 'external'); });
    $('#button3').click(function () {sendEvent('mountain', 'external'); });
    $('#review11').click(function () {sendEvent('review11', 'internal'); });
    $('#review12').click(function () {sendEvent('review12', 'internal'); });
    $('#review21').click(function () {sendEvent('review21', 'internal'); });
    $('#review22').click(function () {sendEvent('review22', 'internal'); });
    $('#fifth_first').click(function () {sendEvent('detail1', 'external'); });
    $('#fifth_second').click(function () {sendEvent('detail2', 'external'); });
    $('.front, .back').click(function () {sendEvent('fifth_detail_view', 'internal'); });
    $('#sixth_promotion').click(function () {sendEvent('promotion_page', 'external'); });
});