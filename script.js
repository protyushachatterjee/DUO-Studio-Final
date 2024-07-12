function loco(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


}

loco()
var crsr=document.querySelector("#cursor")
var body=document.querySelector("body")

document.addEventListener("mousemove",function(dets){
  gsap.to(crsr,{
    x:dets.x,
    y:dets.y,
    duration: 0.6,
    ease: "back.out",
  })
})

gsap.from("#page1 h1,#page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7
})

var tl = gsap.timeline({
  scrollTrigger: {
      trigger: "#page1 h1",
      scroller: "#main",
      start: "top 20%",
      end: "top 0",
      scrub: 2
  }
})


tl.to("#page1 h1", {
  x: -100,
}, "anim")

tl.to("#page1 h2", {
  x: 100
}, "anim")
tl.to("#page1 video",{
  width:"90%"
}, "anim")

var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: "#page1 h1",
      scroller: "#main",
      start: "top -120%",
      end: "top -125%",
      scrub: 2
  }
})


tl2.to("#main",{
  backgroundColor:"#fff"
})
tl2.from("#page2 h1",{
  opacity:0,
  duration:1.5,
  x:100
})
tl2.from("#page2 #page2-container",{
  y:80,
  opacity:0,
  duration:0.5
})
var tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: "#page1 h1",
      scroller: "#main",
      start: "top -210%",
      end: "top -280%",
      scrub: 3
  }
})

tl3.to("#main",{
  backgroundColor:"#0F0D0D"
}, "togather")
tl3.from("#page3 #imgR",{
  x:80,
  opacity:0,
  duration:0.6
}, "togather")
tl3.from("#page3 #imgL",{
  x:-80,
  opacity:0,
  duration:0.6
}, "togather")



var box=document.querySelectorAll(".box")
box.forEach(function(elem){
  elem.addEventListener("mousemove",function(){
    var att=elem.getAttribute("data-custom")
    crsr.style.height="300px"
    crsr.style.width="300px"
    crsr.style.borderRadius="0"
    crsr.style.backgroundImage=`url(${att})`
  })
  elem.addEventListener("mouseleave",function(){
    elem.computedStyleMap.backgroundColor="transparent"
    crsr.style.height="20px"
    crsr.style.width="20px"
    crsr.style.borderRadius="50px"
  })
})

