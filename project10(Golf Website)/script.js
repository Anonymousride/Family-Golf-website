var crsr = document.querySelector("#cursor")
var crsrblr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
   crsr.style.left = dets.x+25 +"px"
   crsr.style.top = dets.y+"px"
   crsrblr.style.left = dets.x-200+"px"
   crsrblr.style.top = dets.y-200+"px"
})

var h4all =document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border ="1px solid #fff"
        crsr.style.backgroundColor ="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border ="0px solid #95C11E"
        crsr.style.backgroundColor ="#95C11E"
    })
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true
        start: "Top -25%",
        end: "Top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:1
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:1
    }
})
gsap.from("#page-4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page-4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})
