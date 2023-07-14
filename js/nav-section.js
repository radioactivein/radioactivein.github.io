const navLinks = document.querySelectorAll('.nav-link');

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Remove the "active" class from all navigation links
          navLinks.forEach(link => {
            link.classList.remove('active');
          });

          // Get the corresponding navigation link based on the section's ID
          const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          
          if (link) {
            // Add the "active" class to the corresponding navigation link
            link.classList.add('active');
          }

          observer.disconnect(); // Stop observing after executing the script once
        }
      });
    });

    // Select all sections
    const sections = document.querySelectorAll('.section');

    // Start observing each section
    sections.forEach(section => {
      observer.observe(section);
    });