// gsap.to("#box1",{
//     x:1200,
//     duration: 2,
//     delay:1,
//     rotate: 360,
//     backgroundColor: "blue",
//     borderRadius: "50%",
// }) 

let tl = gsap.timeline();

tl.from("h1",{
    y: -20,
    delay:0.5,
    duration: 1,
    opacity: 0,
})

tl.from("h4",{
    y: -20,
    duration: 1,
    opacity: 0,
    stagger:0.3,
})

tl.from("#box",{
    y: -20,
    duration: 1,
    opacity: 0,
    stagger:0.3,
    scale: 0.2,
})