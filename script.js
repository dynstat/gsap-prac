gsap.from(".page1 .box", {
    scale: 0,
    duration: 10,
    rotate: 1720
})
gsap.from(".page2 .box", {
    scale: 0,
    duration: 3,
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        markers: true,
        start: "top 76%"

    }
})
gsap.to(".page3 .box", {
    scale: 0,
    duration: 3,
    x: 1000,
    y: -300,
    scrollTrigger: {
        trigger: ".page3 .box",
        scroller: "body",
        markers: true,
        start: "top 76%"
    }

})