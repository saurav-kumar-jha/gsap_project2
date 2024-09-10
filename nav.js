var tl = gsap.timeline()
tl.from("h2",{
    y:-20,
    duration:1,
    delay:0.5,
    opacity:0
})
tl.from("h4",{
    y:-20,
    duration:0.5,
    delay:0,
    opacity:0,
    stagger:1
})
tl.from("#page1 .card",{
    y:30,
    opacity:0,
    duration:4,
    delay:1,
    
})
gsap.from("#page2 .card",{
    x:1300,
    opacity:0,
    duration:4,
    delay:1,
    scale:0,
    // rotate:720,
    // stagger:1,
    scrollTrigger:{
        trigger:"#page2",
        markers:false,
        scroller:"body",
        start:"top 30%",
        end:"top 100%",
        pin:true,
        scrub:3
    }
})
gsap.from("#page3 h1",{
    transform:"translateX(-200%)",
    duration:10,
    delay:1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 20%",
        end:"top 100%",
        pin:true,
        markers:false,
        scrub:4
    }
})
var ipath = `M 10 100 Q 500 100 1200 100`
var fpath = `M 10 100 Q 500 100 1200 100`
var main = document.querySelector("#main")

main.addEventListener("mousemove",(dets)=>{
    ipath = `M 10 100 Q ${dets.x} ${dets.y} 1200 100`,
    gsap.to("svg path",{
        attr:{d:ipath},
        duration:0.5,
        ease: "power3.out"
    })
})

main.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:fpath},
        duration:1.5,
        ease: "elastic.out(1.2,0.3)"
    })
})