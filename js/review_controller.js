/*global $, window, document */

/* when hamburger opened */
$(window).on("load", function () {
    "use strict";
    var image1 = $('#review_image1'),
        image2 = $('#review_image2'),
        image3 = $('#review_image3');
    image1.css('opacity', 0.1);
    image2.css('opacity', 0.1);
    image3.css('opacity', 0.1);
    
    // reset
    $("#close_review").click(function () {
        $('#review').fadeOut(300);
        image1.css('opacity', 0.1);
        image2.css('opacity', 0.1);
        image3.show();
        image3.css('opacity', 0.1);
    });
    
    $("#review11").click(function () {
        image1.attr('src', './images/fourth_4watches/r1-1.png');
        image2.attr('src', './images/fourth_4watches/r1-2.png');
        image3.attr('src', '');
        image3.hide();
        // image cascade fadein
        $('#review').fadeIn(300);
        image1.animate({opacity: 1}, 800);
        image2.animate({opacity: 1}, 1200);
        image3.animate({opacity: 1}, 1600);
        
        $('#review_title').text('몽블랑 1858 오토매틱 (Montblanc 1858 Automatic)');
        $('#review_text').html("몽블랑 1858 오토매틱은 스테인리스 스틸 케이스에 브론즈 소재를 혼용하고 특유의 빈티지 코드로 무장해 특색을 보인다. 이번 컬렉션에서는 보다 작고 웨어러블한 40mm 사이즈로 선보인다.<br><br>\
블랙 또는 스모크 샴페인 두 가지 컬러 다이얼로 역사적인 미네르바의 타임피스를 재해석하며, 두 다이얼 모두 베이지 색의 루미너스 아라비아 숫자와 레일웨이 미닛 트랙을 사용했다. 몽블랑 1858 오토매틱은 수심 100m까지 방수가 되며 몽블랑 랩 테스트 500을 통과했다.");
        $('#detail_button').attr('href', 'https://www.montblanc.com/ko-kr/collection/watches/montblanc-1858-collection/117833-montblanc-1858-automatic.html');
        $('#review_button').attr('href', 'https://www.timeforum.co.kr/SPECIAL/16785162');
    });
    
    $("#review12").click(function () {
        image1.attr('src', './images/fourth_4watches/r2-1.png');
        image2.attr('src', './images/fourth_4watches/r2-2.png');
        image3.attr('src', './images/fourth_4watches/r2-3.png');
        // image cascade fadein
        $('#review').fadeIn(300);
        image1.animate({opacity: 1}, 800);
        image2.animate({opacity: 1}, 1200);
        image3.animate({opacity: 1}, 1600);
        
        $('#review_title').text('몽블랑 1858 오토매틱 크로노그래프 (Montblanc 1858 Automatic Chronograph)');
        $('#review_text').html("몽블랑 1858 크로노그래프 오토매틱은 컬렉션을 관통하는 빈티지 디자인 코드와 크로노그래프 기능을 결합했다. 스테인리스 스틸이나 브론즈 케이스 중 선택할 수 있다.<br>\
브론즈 모델의 선레이 마감 스모크 샴페인 컬러 다이얼은 미네르바의 역사적인 크로노그래프에서 영감을 받은 3시와 9시 방향의 바이-컴팩스(Bi-Compax) 카운터를 더욱 돋보이게 한다. <br>다이얼에는 슈퍼 루미노바 코팅된 베이지 컬러의 루미너스 아라비아 숫자와 고전적인 커시드럴(Cathedral) 핸즈를 사용했다.");
        $('#detail_button').attr('href', 'https://www.montblanc.com/ko-kr/collection/watches/montblanc-1858-collection/117835-montblanc-1858-automatic-chronograph.html');
        $('#review_button').attr('href', 'https://www.timeforum.co.kr/SPECIAL/16785343');
    });
    
    $("#review21").click(function () {
        image1.attr('src', './images/fourth_4watches/r4-1.png');
        image2.attr('src', './images/fourth_4watches/r4-2.png');
        image3.attr('src', './images/fourth_4watches/r4-3.png');
        // image cascade fadein
        $('#review').fadeIn(300);
        image1.animate({opacity: 1}, 800);
        image2.animate({opacity: 1}, 1200);
        image3.animate({opacity: 1}, 1600);
        
        $('#review_title').text('몽블랑 1858 지오스피어 (Montblanc 1858 Geosphere)');
        $('#review_text').html("몽블랑 1858 지오스피어는 칼리버 MB 29.25로 구동되는 새로운 매뉴팩처 월드타임 컴플리케이션을 장착했다.<br>\
월드타임 컴플리케이션은 2개의 회전하는 반구로 구성되어 24시간을 나타낸다. 12시 방향의 북반구는 시계 반대방향, 남반구는 시계 방향으로 회전한다.<br>\
세계 7대륙 최고봉은 빨간점으로 표시하여 산악 탐험의 정신을 강조했다. 또한 케이스백에도 몽블랑 산의 형상, 나침반, 2개의 교차하는 아이스 피크를 함께 새겼고, 다이얼은 슈퍼 루미노바를 코팅하여 어둠 속에서도 최적의 가독성을 선사한다.<br>\
스테인리스 스틸과 브론즈 두 가지 케이스 버전으로 선보이며, 브론즈 버전은 미네르바 매뉴팩처가 설립된 해를 기념하여 1,858점 생산하는 리미티드 에디션이다.");
        $('#detail_button').attr('href', 'https://www.montblanc.com/ko-kr/collection/watches/montblanc-1858-collection/119286-montblanc-1858-geosphere.html');
        $('#review_button').attr('href', 'https://www.timeforum.co.kr/SPECIAL/16785370');
    });
    
    $("#review22").click(function () {
        image1.attr('src', './images/fourth_4watches/r3-1.png');
        image2.attr('src', './images/fourth_4watches/r3-2.png');
        image3.attr('src', '');
        image3.hide();
        // image cascade fadein
        $('#review').fadeIn(300);
        image1.animate({opacity: 1}, 800);
        image2.animate({opacity: 1}, 1200);
        image3.animate({opacity: 1}, 1600);
        
        $('#review_title').text('몽블랑 1858 모노푸셔 크로노그래프 리미티드 에디션 100(Montblanc 1858 Monopusher Chronograph Limited Edition 100)');
        $('#review_text').html("몽블랑 1858 모노푸셔 크로노그래프 리미티드 에디션 100은 1920년대에 제작된 미네르바 모노푸셔 크로노그래프 칼리버 13.20에 헌사를 바친다.<br>\
케이스백의 사파이어 크리스털 글라스를 통해 몽블랑 매뉴팩처 모노푸셔 크로노그래퍼 칼리버 MB M13.21의 아름다움을 감상할 수 있다. 18,000 A/h의 진동수로 회전하는 큼직한 밸런스 휠, 컬럼 휠, 캐링암 커플링 클러치로 구성된다. 수작업으로 마감한 고급 무브먼트에는 1912년에 디자인 특허를 받은 아이코닉한 V 형태의 크로노그래프 브릿지와 몽블랑 장인들이 손으로 장식한 아이코닉한 미네르바 화살을 넣었다.");
        $('#detail_button').attr('href', 'https://www.montblanc.com/ko-kr/collection/watches/montblanc-1858-collection/117834-montblanc-1858-monopusher-chronograph-limited-edition---1.html');
        $('#review_button').attr('href', 'https://www.timeforum.co.kr/SPECIAL/16785179');
    });
});