// window.onscroll = () => {
//     const nav = document.querySelector('#header');
//     if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
//   };


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