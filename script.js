gsap.from(".page1 .box", {
    scale: 0,
    duration: 3,
})
gsap.from(".page2 .box", {
    scale: 0,
    duration: 3,
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        // markers: true,
        start: "top 60%"

    }
})