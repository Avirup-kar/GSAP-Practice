window.addEventListener('wheel', function(dest) {
    if(dest.deltaY > 0) {
        gsap.to(".marqu", {
            transform: 'translatex(-100%)',
            duration:2,
            repeat: -1,
            ease:"none"
        })
        gsap.to(".marqu i", {
            rotation:180,
            duration:0.2,
        })
    }
    else{
        gsap.to(".marqu", {
            transform: 'translatex(0)',
            duration:2,
            repeat: -1,
            ease:"none"
        })
        gsap.to(".marqu i", {
            rotation:0,
            duration:0.2,
        })
    }
});

