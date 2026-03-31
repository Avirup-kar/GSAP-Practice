const navi = document.querySelector("#navi");
const hami = document.querySelector("#hami");

const tl = gsap.timeline();

   tl.to(".ham", {
    right: "0%",
    duration: 0.6,
   })
   
   tl.from(".ham h1", {
       x:100,
       opacity: 0,
       stagger: 0.2,
   })

   tl.from(".ham i", {
    scale: 0,
    opacity: 0,
})

 tl.pause()

navi.addEventListener("click", () => {
    console.log('clicked');
    tl.play();
})



hami.addEventListener("click", () => {
    tl.reverse();
})