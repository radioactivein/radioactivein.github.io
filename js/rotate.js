// $('.edu-card').click(function(){
//     clicktorotate($(this));
//   });

//   function clicktorotate($obj){
//     var clickedElement=$obj;
//     if(clickedElement.hasClass('.down')){
//       clickedElement.find('.rotate');
//       clickedElement.removeClass('.down');
//     }
//     else{
//     //   clickedElement.find('.rotate');
//       clickedElement.addClass('.down');
//     }
//   }

// $(".rotate").click(function () {
//     $(this).toggleClass("down");
// })





// document.addEventListener('DOMContentLoaded', function() {
//     var eduCards = document.querySelectorAll('.edu-card');
  
//     // Attach click event listener to each edu-card
//     eduCards.forEach(function(eduCard) {
//       var rotateElements = eduCard.querySelectorAll('.rotate');
  
//       rotateElements.forEach(function(rotateElement) {
//         rotateElement.addEventListener('click', function() {
//           rotateElement.classList.toggle('down');
//         //   rotateElement.classList.toggle('up');
//         });
//       });
//     });
//   });




// document.addEventListener('DOMContentLoaded', function() {
//     var eduCards = document.querySelectorAll('.edu-card');
  
//     // Attach click event listener to each edu-card
//     eduCards.forEach(function(eduCard) {
//       var rotateElement = eduCard.querySelector('.rotate');
    
  
//       eduCard.addEventListener('click', function() {
//         rotateElement.classList.toggle('down');
        
//       });
//     });
//   });


// document.addEventListener('DOMContentLoaded', function() {
//     var eduCards = document.querySelectorAll('.edu-card');
  
//     eduCards.forEach(function(eduCard) {
//       var rotateElement = eduCard.querySelector('.rotate');
//     //   var expandElement = eduCard.querySelector('.expand');
  
//       eduCard.addEventListener('click', function() {
//         rotateElement.classList.toggle('down');
//         // rotateElement.classList.toggle('up');
//         // expandElement.classList.toggle('show');
//       });
//     });
//   });


document.addEventListener('DOMContentLoaded', function() {
    var eduCards = document.querySelectorAll('.edu-card');
  
    eduCards.forEach(function(eduCard) {
      eduCard.addEventListener('click', function() {
        var rotateElements = eduCard.querySelectorAll('.rotate');
  
        rotateElements.forEach(function(rotateElement) {
          rotateElement.classList.toggle('down');
          rotateElement.classList.toggle('up');
        });
      });
    });
  });