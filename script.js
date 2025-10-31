var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +"px"; 
    crsr.style.top = dets.y +"px"; 
    blur.style.left = dets.x - 140 +"px"; 
    blur.style.top = dets.y - 140 +"px"; 
})

var h4 = document.querySelectorAll("#nav h4");
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";

    })

     elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #fff";
        crsr.style.backgroundColor = "#95C11E";

    })
})

gsap.to("#nav",{
    backgroundColor : "#000",
    duration : 0.4,
    height : '85px',
    scrollTrigger :{
        trigger : "#nav",
        scroller : "body",
        start : "top -10%",
        stop : "top -11%",
        scrub : 2
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -30%",
        end:"top -90%",
        scrub : 2
    }
})


gsap.from("#about-us img, #about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
});



gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger : 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 80%",  
        end: "top 65%",
        scrub: 1,
    }
});

gsap.from("#colon1 , #colon2", {
   x: -70,
   y:-70,
   duration : 1,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start : "top 10%",
        end : "top 20%",
        scrub : 3
    }
});

gsap.from("#page4 h2", {
   y:50,
   duration :0.2,
    scrollTrigger: {
        trigger: "#page4 h2",
        scroller: "body",
        start : "top 75%",
        end : "top 70%",
        scrub : 3
    }
});
