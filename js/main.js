$(function(){
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
            trigger: '#aboutme_1',
            start: "start center",
            end: "10% center",
            scrub: 1,
            markers: false,
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
            trigger: '#aboutme_3',
            start: "top center",
            end: "top center",
            scrub: 1,
            markers: false,
        },
        opacity: 1,
        y:0
    });
  
    //json
    $.ajax({
        type:"GET",
        url : "json/portfoliodata.json",
        dataType : "json",
        
        success : function(data){
            var itemList = $('.pf_list'),
            itemLenght = data.length;
            
            function getDate(showminCont, showmaxCont){
                for(var i = showminCont; i < showmaxCont; i++){
                    address = `<li>
                    <a href="${data[i].link}" title="새 창 열기" target="_blank">
                        <img src="${data[i].image}" alt="${data[i].title}">
                        <div class="text">
                            <p>${data[i].workperio}</p>
                            <p>${data[i].contribution}</p>
                        </div>
                    </a>
                    <div class="tit_w">
                        <span class="label ${data[i].typeclass}">${data[i].type}</span>
                        <p class="tit">${data[i].title}</p>
                    </div>
                </li>`;
                    itemList.append(address);
                };
            }; 

            getDate(0, 8);
            const moreBtncount = Math.ceil(itemLenght/4),
                maxMorebtncount = moreBtncount-2;
            var count = 1;
            
            $(".v_more").on("click", function(){
                count++;
                if(count < maxMorebtncount){
                    getDate(9, 13);
                    
                }else if(count = maxMorebtncount){
                    getDate(14, itemLenght);
                    $(".v_more").hide();
                };

                console.log(count)
            });
        },
        error : function(request,status,error){
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });

});

