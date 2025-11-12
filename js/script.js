// // nav-scroll-bg 

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
    var year = new Date().getFullYear();
    $('#currentYear').text(year);
  })





////// *****theme******

// function to set a given theme/color-scheme
 function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// // function to toggle between light and dark theme
function toggleTheme() {
if (localStorage.getItem('theme') === 'theme-dark') {
  setTheme('theme-light');
} else {
  setTheme('theme-dark');
}

// Toggle invert-img class for each card-icon element
const cardIcons = document.querySelectorAll('.card-icon');
cardIcons.forEach((cardIcon) => {
  cardIcon.classList.toggle('invert-img');
});
}

// Immediately invoked function to set the theme on initial load
(function () {
if (localStorage.getItem('theme') === 'theme-dark') {
  setTheme('theme-dark');
  document.getElementById('slider').checked = false;
} else {
  setTheme('theme-light');
  document.getElementById('slider').checked = true;
}

// Toggle invert-img class for each card-icon element initially
const cardIcons = document.querySelectorAll('.card-icon');
cardIcons.forEach((cardIcon) => {
  cardIcon.classList.toggle('invert-img');
});
})();

// // typewriter

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["UX / UI Designer.", "Web Developer.", "Web Designer."];
const typingDelay = 100;
const erasingDelay = 80;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


////// ***** cards******

// card -expand 
$('.edu-card').click(function() {
  clickToExapndCards($(this));
});

function clickToExapndCards($obj){
  var clickedElement = $obj;
  if (clickedElement.hasClass('expanded')) {
    clickedElement.find('.expand').hide('.5s');
    clickedElement.removeClass('expanded');
  } else {
     clickedElement.find('.expand').show('.5s');
    clickedElement.addClass('expanded');
  }
};

// // card-arrow -rotate
document.addEventListener('DOMContentLoaded', function() {
  var eduCards = document.querySelectorAll('.edu-card');

  eduCards.forEach(function(eduCard) {
    eduCard.addEventListener('click', function() {
      var rotateElements = eduCard.querySelectorAll('.rotate');

      rotateElements.forEach(function(rotateElement) {
        rotateElement.classList.toggle('down');
      //   rotateElement.classList.toggle('up');
      });
    });
  });
});




////// skill-status

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Execute your script when the section is loaded
      console.log('Section loaded!');
      loadScript(); // Call the function to execute your specific script
      observer.disconnect(); // Stop observing after executing the script once
    }
  });
});
// Select the section element
const section = document.querySelector('#progress1');
// Start observing the section
observer.observe(section);
// Function to load your specific script
function loadScript() {
  var progress1 = 0.1; //html
  $('#progress').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 2500);

  var progress1 = 0.1 //css
  $('#progress1').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 3300);

  var progress11 = 0.1 //css
  $('#progress1').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 3300);

  var progress1 = 0.5 //js
  $('#progress2').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 2600);

  var progress1 = 0.5 //jq
  $('#progress3').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 2600);

  var progress1 = 0.3 //ps
  $('#progress4').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 2600);

  var progress1 = 0.1 //ai
  $('#progress5').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 3700);

  var progress1 = 0.3 //figma
  $('#progress6').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 3600);

  var progress1 = 0.1
  $('#progress7').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 3300);    

  var progress1 = 0.5
  $('#progress8').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 3300);  

  var progress1 = 0.1
  $('#progress9').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 3300);
  
  var progress1 = 0.7
  $('#progress10').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 3300);  

  var progress1 = 0.4
  $('#progress11').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 3300);  
}



// map
function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "8e0a97af9386fef",
    center: { lat: 48.85, lng: 2.35 },
    zoom: 12,
  });
}

window.initMap = initMap;




// owl-cards
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:20,
  responsiveClass:true,
  loop:true,
  autoplay:true,
  autoplayTimeout:1500,
  responsive:{
      0:{
          items:1
      },
      900:{
          items:2
      },
      1100:{
          items:2
      },
      1400:{
          items:3
      },
      1600:{
          items:4
      }
  }
})