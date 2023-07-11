// window.onscroll = () => {
//     const nav = document.querySelector('#header');
//     if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
//   };

///nav-bg

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 70) {
          $(".header").css("background" , "var(--bg-nav)");
          $(".header").css("backdrop-filter" , "blur(20px)");
        }
  
        else{
          $(".header").css("backdrop-filter" , "blur(0)");
          $(".header").css("background" , "rgba(0, 0, 0, 0.0)");  	
        }
    })
  })


///nav-active 

  $(document).ready(function () {
 
    $('ul.nav-ul li > a')
            .click(function (e) {
        $('ul.nav-ul li > a')
            .removeClass('active');
        $(this).addClass('active');
    });
});