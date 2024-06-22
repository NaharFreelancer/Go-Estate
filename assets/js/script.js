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
  // centerMode: true, // Enable center mode
  centerPadding: '30px', // Add padding around the centered slide

  responsive: [
    {
      breakpoint: 1100,
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
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true, // Enable center mode
  centerPadding: '30px', // Add padding around the centered slide
  
  prevArrow:
    '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '30px', // Ensure this is included in the breakpoint settings
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '30px', // Ensure this is included in the breakpoint settings
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '30px', // Ensure this is included in the breakpoint settings
      },
    },
  ],
});

// ========customer section slider end/=====/

// ========faq section js code start/=====/
// function toggleFaq(element) {
//   // Get the parent .faq_parent element
//   const faqParent = element.closest('.faq_parent');
  
//   // Get the answer element
//   const answer = element.nextElementSibling;
  
//   // Toggle the 'active' class on the answer and parent div
//   answer.classList.toggle('active');
//   faqParent.classList.toggle('active');
  
//   // Toggle the icon
//   const icon = element.querySelector('i');
//   icon.classList.toggle('fa-plus');
//   icon.classList.toggle('fa-xmark');
  
//   // Toggle the active class for the question to change its color
//   element.classList.toggle('active');
// }


function toggleFaq(element) {
  // Get the parent .faq_parent element
  const faqParent = element.closest('.faq_parent');
  
  // Get the answer element
  const answer = element.nextElementSibling;
  
  // Check if this answer is already active
  const isActive = answer.classList.contains('active');

  // Close all other active FAQ items
  document.querySelectorAll('.faq_parent .faq_answer.active').forEach((activeAnswer) => {
    activeAnswer.classList.remove('active');
    activeAnswer.previousElementSibling.classList.remove('active');
    activeAnswer.closest('.faq_parent').classList.remove('active');
    activeAnswer.previousElementSibling.querySelector('i').classList.add('fa-plus');
    activeAnswer.previousElementSibling.querySelector('i').classList.remove('fa-xmark');
  });

  // Toggle the 'active' class on the answer and parent div only if it was not active before
  if (!isActive) {
    answer.classList.add('active');
    faqParent.classList.add('active');
    element.classList.add('active');
    const icon = element.querySelector('i');
    icon.classList.remove('fa-plus');
    icon.classList.add('fa-xmark');
  }
}

// ========faq section js code end/=====/


///---- counting animation start---///

const counterUp = window.counterUp.default;

const callback = entries => {
    entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            counterUp(el, {
                duration: 2000,
                delay: 16,
            });
            el.classList.add('is-visible');
        }
    });
};

// Select all elements with the class 'counter'
const elements = document.querySelectorAll('.counter');

// Create an IntersectionObserver for each element
const observers = [];
elements.forEach(el => {
    const observer = new IntersectionObserver(callback, { threshold: 1 });
    observer.observe(el);
    observers.push(observer);
});



///---- counting animation end---///


///---- image swapping animation start---///

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
  MainImg.src = smallimg[0].src;
};
smallimg[1].onclick = function () {
  MainImg.src = smallimg[1].src;
};
smallimg[2].onclick = function () {
  MainImg.src = smallimg[2].src;
};
smallimg[3].onclick = function () {
  MainImg.src = smallimg[3].src;
};

// var MainImg = document.getElementById("MainImg");
// var smallimg = document.getElementsByClassName("small-img");

for (var i = 0; i < smallimg.length; i++) {
  smallimg[i].onclick = function (event) {
    MainImg.src = event.target.src;

    // Remove border from all small-img elements
    for (var j = 0; j < smallimg.length; j++) {
      smallimg[j].classList.remove("selected");
    }

    // Add border to the clicked small-img
    this.classList.add("selected");
  };
}
///---- image swapping animation end---///

// ========read more js code start/=====/
function showMore() {
  var moreText = document.getElementById("more");
  var moreLink = document.getElementById("read-more-link");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    moreLink.innerHTML = "...Read Less";
  } else {
    moreText.style.display = "none";
    moreLink.innerHTML = "...Read More";
  }
}
// ========read more js code end/=====/
