const btnMenu = document.getElementById("menuResponsiveBtn");
const menuDespleglable = document.getElementById("menuDesplegable");
const menuCierre = document.getElementById("menuCierre");


btnMenu.onclick = ()=>{
    menuDespleglable.classList.add("absolute")
    menuDespleglable.classList.remove("hidden")
}
menuCierre.onclick = ()=>{
    menuDespleglable.classList.remove("absolute")
    menuDespleglable.classList.add("hidden")
}

// const slides = document.querySelectorAll('.slide');
// const btns = document.querySelectorAll('.btn');
// let currentSlide = 1;

// // Javascript for image slider manual navigation
// const manualNav = function(manual){
//   slides.forEach((slide) => {
//     slide.classList.remove('active');

//     btns.forEach((btn) => {
//       btn.classList.remove('active');
//     });
//   });

//   slides[manual].classList.add('active');
//   btns[manual].classList.add('active');
// }

// btns.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     manualNav(i);
//     currentSlide = i;
//   });
// });

// // Javascript for image slider autoplay navigation
// const repeat = function(activeClass){
//   let active = document.getElementsByClassName('active');
//   let i = 1;

//   const repeater = () => {
//     setTimeout(function(){
//       [...active].forEach((activeSlide) => {
//         activeSlide.classList.remove('active');
//       });

//     slides[i].classList.add('active');
//     btns[i].classList.add('active');
//     i++;

//     if(slides.length == i){
//       i = 0;
//     }
//     if(i >= slides.length){
//       return;
//     }
//     repeater();
//   }, 4000);
//   }
//   repeater();
// }
// repeat();


const slider = document.querySelector('.slider');
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const slides = document.querySelectorAll('.slide');
const slideIcons = document.querySelectorAll('.slide-icon');
const numberOfSlides = slides.length;
var slideNumber = 0;


//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 3000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});