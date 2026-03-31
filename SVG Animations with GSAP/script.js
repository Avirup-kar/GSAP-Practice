let path = "M 20 97 Q 500 100 990 100";
let finalPath = "M 100 97 Q 500 100 1450 100";

let string = document.querySelector("#string");

string.addEventListener("mousemove", function (dest) {
      path = `M 100 100 Q ${dest.x} ${dest.y} 1450 100`
      gsap.to("svg path", {
        attr:{ d: path },
      })
})


string.addEventListener("mouseleave", function (dest) {
    gsap.to("svg path", {
      attr:{ d: finalPath },
      duration: 1,
      ease: "elastic.out(1,0.3)",
    })
})

