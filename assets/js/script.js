// ========responsive menu js code/=====/

function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }
  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }
  
  // nav bar js
  let menuIcon = document.querySelector(".menuIcon");
  let crossBtn = document.querySelector(".crossBtn");
  // let crossBtn = document.getElementsByClassName('crossBtn')
  let mobile__menu = document.querySelector(".mobile__menu");
  
  menuIcon.addEventListener("click", function () {
    mobile__menu.classList.toggle("open");
  });
  
  crossBtn.addEventListener("click", function () {
    mobile__menu.classList.remove("open");
  });
  
  // ========responsive menu js code/=====/

  ///---- Scroll to Top start---///

document.addEventListener("DOMContentLoaded", function () {
    // Get the button element
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    // Show or hide the button based on scroll position
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };
  });
  
  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
  
  ///---- Scroll to Top end---///

  // ========feature section slider start/=====/
$(".feature_slider").slick({
  dots: true,
  infinite: false,
  loop:true,
  autoplay:true,
  speed: 300,
  centerPadding: "30px",
  spaceBetween: 30,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// ========feature section slider end/=====/
// ========customer section slider start/=====/
$(".customer_slider").slick({
  dots: false,
  infinite: true,
  loop:false,
  autoplay:true,
  speed: 300,
  centerPadding: "30px",
  spaceBetween: 30,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,

  
  prevArrow:
    '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// ========customer section slider end/=====/


function toggleFaq(element) {
  // Get the parent .faq_parent element
  const faqParent = element.closest('.faq_parent');
  
  // Get the answer element
  const answer = element.nextElementSibling;
  
  // Toggle the 'active' class on the answer and parent div
  answer.classList.toggle('active');
  faqParent.classList.toggle('active');
  
  // Toggle the icon
  const icon = element.querySelector('i');
  icon.classList.toggle('fa-plus');
  icon.classList.toggle('fa-xmark');
  
  // Toggle the active class for the question to change its color
  element.classList.toggle('active');
}
