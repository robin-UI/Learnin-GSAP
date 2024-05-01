// import gsap from "gsap";
// const gsap = require("gsap");
gsap.registerPlugin(ScrollTrigger)

gsap.to(".c", {
  x: 400,
  rotation: 360,
  duration: 3,
});

gsap.to(".dBox", {
  scrollTrigger: ".dBox", // start the animation when ".box" enters the viewport (once)
  x: 500,
  duration: 3,
  scrub: 1,
});

// window.addEventListener("scroll", () => {
//     console.log("Scroll is activated");
//   const h1 = document.getElementById("myHeading");
//   const scrollPos = window.scrollY;
//   const viewportHeight = window.innerHeight;

//   if (scrollPos > viewportHeight) {
//     gsap.to(h1, { opacity: 0, blur: 10, duration: 1 });
//   } else {
//     gsap.to(h1, { opacity: 1, blur: 0, duration: 1 });
//   }
// });
