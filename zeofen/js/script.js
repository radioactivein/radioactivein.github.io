$(window).on('load', function () {
    setTimeout(function () {
        $('.loading').fadeOut(300); // or .hide()
    }, 100); // 500ms = 0.5 second delay

    if($('.cart-products').html() == ''){
        $('.empty-cart').fadeIn(300);
    }
});



// $(document).on('ready',function(){
    
    $(window).on('scroll',function(){
        if($(window).scrollTop() > 50){
            $('.scroll-top').css('display','flex');
            
        }else{
            $('.scroll-top').css('display','none');
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
        // $('.search-bar .close-icon').addClass('clicked');
        $('.search-bar .search-icon').addClass('clicked');
    });

    $('.search-bar .close-icon').on('click',function(){
        $('.search-suggestion').removeClass('clicked');
        // $('.search-bar .close-icon').removeClass('clicked');
        $('.search-bar input').val('');
        $('.search-bar .search-icon').removeClass('clicked');
    });

    $(document).on('click', function(e) {
        // If the click is outside the search input and the suggestions
        if (!$(e.target).closest('.search-bar input, .search-suggestion').length) {
            $('.search-suggestion').removeClass('clicked');
            // $('.search-bar .close-icon').removeClass('clicked');
            $('.search-bar .search-icon').removeClass('clicked');
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

    let interval; // for holding
let holdDelay = 150; // speed for hold

// Decrease
$('.count-minus')
.on('click', function() {
    let $countElem = $(this).siblings('.product-count');
    let count = parseInt($countElem.text());
    if (count > 1) {
        count--;
        $countElem.text(count);
    }
})
.on('mousedown touchstart', function(e) {
    e.preventDefault(); // prevent mobile double-trigger
    let $countElem = $(this).siblings('.product-count');
    interval = setInterval(() => {
        let count = parseInt($countElem.text());
        if (count > 1) {
            count--;
            $countElem.text(count);
        }
    }, holdDelay);
})
.on('mouseup mouseleave touchend', function() {
    clearInterval(interval);
});

// Increase
$('.count-add')
.on('click', function() {
    let $countElem = $(this).siblings('.product-count');
    let count = parseInt($countElem.text());
    count++;
    $countElem.text(count);
})
.on('mousedown touchstart', function(e) {
    e.preventDefault();
    let $countElem = $(this).siblings('.product-count');
    interval = setInterval(() => {
        let count = parseInt($countElem.text());
        count++;
        $countElem.text(count);
    }, holdDelay);
})
.on('mouseup mouseleave touchend', function() {
    clearInterval(interval);
});



    // })

    // coupon
   $('#checkout .coupon').on('click',function(){
    var couponCode = $('#checkout .coupon-input').val().trim(); // remove spaces
    if(couponCode === ''){
        console.log('coupon not applied');
    }else{
        $('.coupon-applied').css('display','flex').fadeIn(300);
        console.log('coupon applied');
    }
   })

    function removeCoupon(){
        $('.coupon-applied').css('display','none').fadeOut(300);
        $('.coupon-input').val('');
    }



    // removeProduct
    function removeProduct(element) {
        $(element).closest('.cart-product').remove();
    
        // Check if there are NO cart-product elements left
        if ($('.cart-products').children('.cart-product').length === 0) {
            $('.empty-cart').css('display','flex').fadeIn(300);
            $('.btn.btn-clear-cart').hide();
            $('.cart-summary').hide();
        } else {
            $('.empty-cart').css('display','none');
            $('.btn.btn-clear-cart').show();
            $('.cart-summary').show();
        }
    }
    // clearCart
    function clearCart(){
        $('.cart-products').empty(); // remove cart items
        $('.cart-summary').empty(); // remove cart summary
        $('.empty-cart').css('display','flex').fadeIn(300); //empty state
        $('.btn.btn-clear-cart').hide();//hide remove button
        closeModal();
    }

    function openModal(){
        $('.modal-empty-cart').addClass('clicked').fadeIn(300);
    }
    function closeModal(){
        $('.modal-empty-cart').removeClass('clicked').fadeOut(300);
    }

    // checkout
    $('#checkout .collapse-label').on('click', function() {
        $(this).closest('.collapseble')
               .find('.collapse-data')
               .slideToggle(300);
    
        let $icon = $(this).find('.fa-chevron-up, .fa-chevron-down');
        $icon.toggleClass('fa-chevron-up fa-chevron-down');
    });


    
    

    


    

    // Login Form
    // toggle password
    $('.eye-icon-password').on('click', function() {
        var passwordInput = $('#password');
        var icon = $(this);

        if (passwordInput.attr('type') === 'password') {
            passwordInput.attr('type', 'text');
            icon.removeClass('fa-eye-slash').addClass('fa-eye');
        } else {
            passwordInput.attr('type', 'password');
            icon.removeClass('fa-eye').addClass('fa-eye-slash');
        }
    });

    // create account
    $('#create-account-btn').on('click', function() {
        $('#login-form').removeClass('active');
        $('#create-account').addClass('active');
    });

    // login
    $('#login-form-btn').on('click', function() {
        $('#create-account').removeClass('active');
        $('#login-form').addClass('active');
    });


    // order status

    $('.delivery-status').each(function(){
        var status = $(this).text();
        if(status == 'Delivered'){
            $(this).addClass('delivered');
        }else if(status == 'Pending'){
            $(this).addClass('pending');
        }else if(status == 'Shipped'){
            $(this).addClass('shipped');
        }else if(status == 'In Transit'){
            $(this).addClass('in-transit');
        }else if(status == 'Cancelled'){
            $(this).addClass('cancelled');
        }
    })


    // collapsable
    $('.collapsable h6').on('click',function(){
        $(this).closest('.collapsable').toggleClass('active');
        // $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
    });

    function clearFilter(){
        $('.filter-box').find('input').prop('checked', false);
        toast('Filter cleared', 'success');
    }


 // carousals

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

      $('.product-carousal').slick({
        // dots: true,
        infinite: true,
        speed: 2000,
        // fade: true,
        // cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows:false,
        pauseOnHover:false,
        swipeToSlide:true,
        // asNavFor: '.product-nav',
        // dotsClass:'slick-dots',
      });

    //   $('.product-nav').slick({
    //     // dots: true,
    //     infinite: true,
    //     speed: 2000,
    //     asNavFor: '.product-carousal',
    //     // fade: true,
    //     // cssEase: 'linear',
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     arrows:false,
    //     pauseOnHover:false,
    //     swipeToSlide:true,
    //     // dotsClass:'slick-dots',
    //   });
})

// $('.slick').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true
// });

