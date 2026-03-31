let main = document.querySelector("#main");
let curser = document.querySelector("#curser");
let img = document.querySelector("#image");

main.addEventListener("mousemove", function (dest) {
   gsap.to(curser, {
     x: dest.x,
     y: dest.y,
     ease: "back.out(1.4)",
   });
});

img.addEventListener("mouseenter", function () {
   curser.innerHTML = "Click here";
   gsap.to(curser, {
     scale: 4,
     width: "20px",
     height: "10px",
     borderRadius: "20px",
     backgroundColor: "#fff",
     duration: 0.5,
   });
})


img.addEventListener("mouseleave", function () {
   curser.innerHTML = "";
   gsap.to(curser, {
     scale: 1,
     borderRadius: "50%",
     width: "15px",
     height: "15px",
     backgroundColor: "",
   });
})
