

// var progress = 0.1  //html
// $('#progress').find('#blue').animate({'stroke-dashoffset': 198 * progress}, 1000)

// var progress1 = 0.1 //css
// $('#progress1').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 1000)

// var progress1 = 0.5 //js
// $('#progress2').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 1000)

// var progress1 = 0.5 //jq
// $('#progress3').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 1000)

// var progress1 = 0.3 //ps
// $('#progress4').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 1000)

// var progress1 = 0.1 //ai
// $('#progress5').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 1000)

// var progress1 = 0.2 //figma
// $('#progress6').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 1000)

// var progress1 = 0.5
// $('#progress7').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 1000)



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
  const section = document.querySelector('#progress');

  // Start observing the section
  observer.observe(section);

  // Function to load your specific script
  function loadScript() {
    var progress1 = 0.5;
    $('#progress').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 2500);

    var progress1 = 0.1 //css
    $('#progress1').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 3300);

    var progress1 = 0.5 //js
    $('#progress2').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 2600);

    var progress1 = 0.5 //jq
    $('#progress3').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 2600);

    var progress1 = 0.3 //ps
    $('#progress4').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 2600);

    var progress1 = 0.1 //ai
    $('#progress5').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 3000);

    var progress1 = 0.2 //figma
    $('#progress6').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 3300);

    var progress1 = 0.5
    $('#progress7').find('#blue').animate({'stroke-dashoffset': 198 * progress1}, 3300);    
  }