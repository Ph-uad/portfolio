gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline();


tl.from(".header-title", { duration: .2, opacity: 0, scale: 0.3, ease: "back", y: -200 });
tl.from(".icon", { duration: .5, opacity: 0, y: -20, stagger: 0.5 });
tl.from(" .slide-link__line", {opacity: 0});


gsap.to(".message-design__block", {
    scrollTrigger: {
        trigger: ".fluid-container",
        start:"top, -50%",
        scrub: 2,

        toggleActions: "restart pause reverse pause"
    },
       scale: 0,
        y: 2500,
        x: 500
});






//navCircle
// const navCircle = document.querySelector('.slide-link');
// let counter = -1;

// navCircle.addEventListener('click',function(e){

//     //Create an array of link to allow dynamic use
//     const linkArray = ['body','message', 'process', 'about', 'philosophy'];
//     if(counter < linkArray.length - 1){
//           counter ++;
//     }else{
//         counter = 0;
//     }
  
//     e.target.href= `#${linkArray[counter]}`
//     console.log( e.target.href, counter)

// })