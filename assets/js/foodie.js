// Navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-nav-toggle-btn]");

menuToggleBtn.addEventListener("click", function(){
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

// Switching positions
navbarLinks.forEach((navbarlink) => {
  navbarlink.addEventListener("click", function(){
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  })
});

// Scroll header
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]"); 
window.addEventListener("scroll", function(){
  if(window.scrollY >= 100){
    header.classList.add("active");
    backTopBtn.classList.add("active");
  }else{
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Switching to search page
const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];
searchBoxElems.forEach((searchBoxElem) => {
  searchBoxElem.addEventListener("click", function(){
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
});

// Move cycle on scroll
const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -90;
let lastScrollPos = 0;
window.addEventListener("scroll", function(){
  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;
  if(deliveryBoyTopPos < 100 && deliveryBoyTopPos > -250){
    let activeScrollPos = window.scrollY;

    if(lastScrollPos < activeScrollPos){
      deliveryBoyMove++;
    } else{
      deliveryBoyMove--;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
});



