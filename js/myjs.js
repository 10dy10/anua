
$(function(){
    // swiper
    const swiper01 = new Swiper('.back-swiper .swiper', {
        loop: true,
        autoplay: {
            delay: 8000,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiper02 = new Swiper('.best-seller .swiper', {
        loop: true,
        autoplay: {
            delay: 8000,
        },
        breakpoints:{
            1024:{
                slidesPerView:3,
            },
            1000:{
                slidesPerView:2,
            },
            767:{
                slidesPerView:1,
            }
        }
    });

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll>1){$('.header-container').css('background-color','rgba(0,0,0,0.3')}
        else{$('.header-container').css('background-color','transparent')}
    })

    $('.btn-nav').click(function(){
        $('.mo-nav').css('transform','translate(0,0)');
    })
    $('.btn-close').click(function(){
        $('.mo-nav').css('transform','translate(100%,0)');
    })
})