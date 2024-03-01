

var t1=gsap.timeline();
t1.from(".line h1",{
    stagger:0.2,
    y:150,
    duration:0.5,
    delay:0.6
})
t1.from("#line-part1",{
    opacity:0,
    onStart:function(){
        var h5timer=document.querySelector("#line-part1 h5");
var grow=0;
setInterval(function(){
    if(grow<100){
        h5timer.innerHTML=grow++;
    }
    else{
        h5timer.innerHTML=grow;
    }
},30)
    }
})
t1.to(".line h2",{
    animationName:"anime",
    opacity:1
})
t1.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:3
})
t1.from("#page1",{
    opacity:0,
    y:1600,
    ease:Power4
})
t1.to("#loader",{
    display:"none"
})