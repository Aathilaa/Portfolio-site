// Function to show details when "Learn More" is clicked
function showDetails(level) {
    // Hide all details
    document.querySelectorAll('.education-details').forEach(detail => {
        detail.style.display = 'none';
    });

    // Show the selected details based on the level
    document.getElementById(`details-${level}`).style.display = 'block';
}

// Slider logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Function to show a specific slide by index
function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove('active'); // Hide all slides
    });
    slides[index].classList.add('active'); // Show the selected slide
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop to the first slide after the last one
    showSlide(currentSlide);
}

// Initial display of the first slide
showSlide(currentSlide);

// Automatically transition every 3 seconds
setInterval(nextSlide, 2000);

// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}
 // Dark Mode
 let darkmode = document.querySelector('#darkmode');
     
 darkmode.onclick = () => {
     if(darkmode.classList.contains('bx-moon')){
         darkmode.classList.replace('bx-moon','bx-sun');
         document.body.classList.add('active');
     }else{
         darkmode.classList.replace('bx-sun','bx-moon');
         document.body.classList.remove('active');
     }
 }

 //header scroll animation
 let lastScrollTop = 0;
  

  window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
      // Scroll Down: Hide header
      header.style.top = "-100px";  // You can adjust this value based on your header height
    } else {
      // Scroll Up: Show header
      header.style.top = "0";
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
  });