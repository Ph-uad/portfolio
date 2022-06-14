let tl = gsap.timeline();

tl.from(".heading-jumbo__large", { duration: 1, opacity: 0, scale: 0.3, ease: "back", y: -200 });
tl.from(".icon", { y: -20, });
tl.from(" .slide-link__line", { opacity: 0 });



const slides = document.querySelectorAll(".work-card");
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");
let maxSlide = slides.length - 1;
let curSlide = 0;


slides.forEach((slide, index) => {slide.style.transform = `translateX(${index * 100}%)`;});

nextSlide.addEventListener("click", function () {
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

prevSlide.addEventListener("click", function () {
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});





// Wrap every letter in a span
var textWrapper = document.querySelectorAll('.ml3');

textWrapper.forEach(text => {
    text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});


anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 3200,
    delay: (el, i) => 100 * (i+1)
  })


const slide = ( ) =>{
    videos.forEach((block, index) => {
        block.style.transform = `translateX(${100 * (index - currentSlide)}%)`; 
    });
}

slide()


buttonPrevious.addEventListener('click',()=>{
   currentSlide === 0 ? currentSlide  = videos.length -1 : currentSlide--;
   slide();
})

buttonNext.addEventListener('click',()=>{
    currentSlide === videos.length -1 ? currentSlide = 0 : currentSlide++;
    slide();
})