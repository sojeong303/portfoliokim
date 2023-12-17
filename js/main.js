function mainSlide(){}
$(function(){
    // niceScroll
    //$("html").niceScroll();

    //헤더
    var target;
    var menu = $("nav > ul > li > a");

    menu.on("click", function(){
        target = $(this).attr("href");

        $("body, html").animate({scrollTop : $(target).offset().top - 120}, 600)
    });

    $("nav > ul > li > a").on("click", function(){
        $("nav > ul > li > a").removeClass("active");
        $(this).addClass("active");
    });

    // slide_up
    // var upSliderItem = $('.slide_up'),
    //     slideCocunt = upSliderItem.find('li').length,
    //     currentIndex = 0,
    //     sliderPosition,
    //     bannerHeight = upSliderItem.height();
    
    // setInterval(function(){
    //     if(currentIndex < slideCocunt - 1){
    //         currentIndex ++;
    //     }else{
    //         currentIndex = 0;
    //     };

    //     sliderPosition = currentIndex * (-bannerHeight) + "px";
    //     upSliderItem.find('li').animate({top : sliderPosition}, 350);
    // }
    // , 2000);

    // let timer;

    // $(window).on("resize", function(){
    //     clearTimeout(timer);
    //     bannerHeight = upSliderItem.height();

    //     timer = setInterval(function(){
    //         if(currentIndex < slideCocunt - 1){
    //             currentIndex ++;
    //         }else{
    //             currentIndex = 0;
    //         };
    
    //         sliderPosition = currentIndex * (-bannerHeight) + "px";
    //         upSliderItem.find('li').animate({top : sliderPosition}, 350);
    //     }
    //     , 2000);
    // })

    $('.slide_up').slick({
        slidesToShow: 1,
        vertical: true,
        focusOnSelect: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed : 3000,
        adaptiveHeight: true
    });


    //scroll icon
    $(".scroll-icon").on("click", function(){
        var target = $(this).attr('href');
 		
 		$('html, body').stop().animate({scrollTop : $(target).offset().top}, 400);
 		
 		return false;
    });

    // bottom_bg
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({

        "(min-width: 580px)": function() {
            gsap.to('.bottom_bg', {
                scrollTrigger:{
                    trigger: '#home',
                    start: "start start",
                    end: "bottom 90%",
                    scrub: 1,
                    markers: false,
                },
                y: 0,
                opacity: 1
            });
      },
    
        "(max-width: 1024px)": function() {
      },
    
        "all": function() {
            
            gsap.to('.bottom_bg', {
                scrollTrigger:{
                    trigger: '#home',
                    start: "start start",
                    end: "bottom 90%",
                    scrub: 1,
                    markers: false,
                },
                yPercent: ()=>"-50",
                opacity: 1
            });
      }
    
    });


    gsap.to('#home .m_tit', {
        scrollTrigger:{
            trigger: '#home',
            start: "start start",
            end: "bottom 90%",
            scrub: 1,
            markers: false, 
        },
        opacity: 0
    });

    gsap.to('#aboutme_1 > .inner', {
        scrollTrigger:{
            trigger: '#aboutme_1',//객체기준범위
            start: "start center",//시작 지점
            end: "10% center",//끝 지점
            scrub: 1,//부드러운 스크러빙
            markers: false,//개발가이드선
        },
        opacity: 1,
        y:0
    });

    gsap.to('#aboutme_2 > .inner', {
        scrollTrigger:{
            trigger: '#aboutme_2',
            start: "30% center",
            end: "40% center",
            scrub: 1,
            markers: false,
        },
        opacity: 1,
        y:0
    });

    gsap.to('#aboutme_3', {
        scrollTrigger:{
            trigger: '#aboutme_3',//객체기준범위
            start: "top center",//시작 지점
            end: "top center",//끝 지점
            scrub: 1,//부드러운 스크러빙
            markers: false,//개발가이드선
        },
        opacity: 1,
        y:0
    });
  
    //프로젝트 더보기 버튼
    $(".v_more").on("click", function(){
        $("#aboutme_3 ol > li:hidden").slice(0, 4).show();
        if($("#aboutme_3 ol > li:hidden").length == 0){
            $(".v_more").hide();
        };
    });
});

