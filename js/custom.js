
// Header Script
var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("site-header");
var scrollThreshold = 100; // Set the threshold value in pixels
var navbarLinks = document.querySelectorAll("#site-header a");

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  // Check if the current scroll position is greater than or equal to the threshold
  if (currentScrollPos >= scrollThreshold) {
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-100px";
    }
  } else {
    // If the scroll position is less than the threshold, always show the navbar
    navbar.style.top = "0";
  }

  prevScrollpos = currentScrollPos;
}

$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
    $('#site-header').addClass('backdrop');
  } else {
    $('#site-header').removeClass('backdrop');
  }
});

// Industry Tabs Section JS
const containers = document.querySelectorAll('.tabbed-section');
containers.forEach((section) => {
  const headersContainer = section.querySelector('.tab-headers-btns');
  const headers = section.querySelectorAll('.tab-headers-btns .tab-headers-btn');
  const contents = section.querySelectorAll('.tab-content-inner');
  let activeIndex = 0;
  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      headers.forEach((header) => header.classList.remove('active'));
      contents.forEach((content) => content.classList.remove('active'));
      activeIndex = index;
      headers[activeIndex].classList.add('active');
      contents[activeIndex].classList.add('active');
      // Hide/show content for active tab
    contents.forEach((content, index) => {
      if (index === activeIndex) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
      reorderTabs();
    });
  });
  function reorderTabs() {
    const activeHeader = headers[activeIndex];
    const activeHeaderRect = activeHeader.getBoundingClientRect();
    const activeHeaderTop = activeHeaderRect.top;
    const activeHeaderHeight = activeHeaderRect.height;
    const activeHeaderCenter = activeHeaderTop + activeHeaderHeight / 2;
    // Calculate the total height of the headers above the active header
    let totalHeight = 0;
    for (let i = 0; i < activeIndex; i++) {
      const header = headers[i];
      const headerRect = header.getBoundingClientRect();
      const headerHeight = headerRect.height;
      totalHeight += headerHeight;
    }
    // Scroll the headers container to make the active header visible
    headersContainer.style.transition = 'scroll-behavior 0.8s ease-in-out';
    headersContainer.scrollTop = totalHeight;
    // Set the active header to the first position
    headers[0].classList.remove('active');
    activeHeader.classList.add('active');
  }
});
const mySwiper = new Swiper ('.swiper-container', {
  slidesPerView: 1,
  // Optional parameters
  direction: 'horizontal',
  effect:'fade',
  loop: false,
  dots:true,
  speed: 200,
  pagination: {
    el: ".swiper-pagination",
    clickable:true
  },
 mousewheel: false
 });
