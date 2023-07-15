 // function to set a given theme/color-scheme
 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// // function to toggle between light and dark theme
// function toggleTheme() {
//     if (localStorage.getItem('theme') === 'theme-dark') {
//         setTheme('theme-light');
//     } else {
//         setTheme('theme-dark');
//     }
// }

// // Immediately invoked function to set the theme on initial load
// (function () {
//     if (localStorage.getItem('theme') === 'theme-dark') {
//         setTheme('theme-dark');
//         document.getElementById('slider').checked = false;
//     } else {
//         setTheme('theme-light');
//       document.getElementById('slider').checked = true;
//     }
// })();



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