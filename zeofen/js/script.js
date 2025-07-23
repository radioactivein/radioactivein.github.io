$(window).on('load', function () {
    setTimeout(function () {
        $('.loading').fadeOut(300); // or .hide()
    }, 100); // 500ms = 0.5 second delay
});



// $(document).on('ready',function(){
    
    $(window).on('scroll',function(){
        if($(window).scrollTop() > 50){
            $('.scroll-top').fadeIn(500);
        }else{
            $('.scroll-top').fadeOut(500);
        }
    });
    
    $('.scroll-top').on('click',function(){
        $('html, body').animate({
            scrollTop: 0
        }, 0);
    });
    $('.more.status-icon').on('click',function(){
        $('.header-2-cnt nav ul').toggleClass('clicked');
    });

    $('.search-bar input').on('click',function(){
        $('.search-suggestion').addClass('clicked');
        $('.search-bar .close-icon').addClass('clicked');
    });

    $('.search-bar .close-icon').on('click',function(){
        $('.search-suggestion').removeClass('clicked');
        $('.search-bar .close-icon').removeClass('clicked');
        $('.search-bar input').val('');
    });

    $(document).on('click', function(e) {
        // If the click is outside the search input and the suggestions
        if (!$(e.target).closest('.search-bar input, .search-suggestion').length) {
            $('.search-suggestion').removeClass('clicked');
            $('.search-bar .close-icon').removeClass('clicked');
        }
    });

    $('.user').on('click',function(){
        $('.user-menu').toggleClass('clicked');
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('.user, .user-menu').length) {
            $('.user-menu').removeClass('clicked');
        }
    });

    // color selection
    $('.variant-color button').on('click',function(){
        $('.variant-color button').removeClass('clicked');
        $(this).addClass('clicked');
        $('.selected-color').text($(this).attr('title'));
    });

    // size selection
    $('.variant-size button').on('click',function(){
        $('.variant-size button').removeClass('clicked');
        $(this).addClass('clicked');
        $('.selected-size').text($(this).text());
    });

    // count Selection
    $('.count-minus').on('click',function(){
        var count = $(this).siblings('.product-count').text();
        if(count > 1){
            count--;
            $(this).siblings('.product-count').text(count);
        }
    });
    $('.count-add').on('click',function(){
        var count = $(this).siblings('.product-count').text();
        count++;
        $(this).siblings('.product-count').text(count);
    });
// })

$(document).ready(function(){
    

    $('.banner-slides').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        // fade: true,
        // cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
        pauseOnHover:false,
      });
})

// $('.slick').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true
// });



