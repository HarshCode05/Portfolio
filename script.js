/* ======================
typing animation
====================== */

const text="Java Developer | Problem Solver";
let i=0;

function typing(){

const el=document.getElementById("typing");

if(i<text.length){

el.innerHTML+=text.charAt(i);
i++;

setTimeout(typing,70);

}

}

typing();



/* ======================
scroll animation
====================== */

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-100){

sec.classList.add("show");

}

});

});



/* ======================
cursor glow
====================== */

const cursor=document.createElement("div");

cursor.classList.add("cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove",e=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});



/* ======================
floating stones
====================== */

let stones=[];

for(let s=0;s<12;s++){

let stone=document.createElement("div");

stone.classList.add("stone");

let size=40+Math.random()*80;

stone.style.width=size+"px";
stone.style.height=size+"px";

stone.style.left=Math.random()*window.innerWidth+"px";
stone.style.top=Math.random()*window.innerHeight+"px";

document.body.appendChild(stone);

stones.push({

el:stone,

x:Math.random()*window.innerWidth,

y:Math.random()*window.innerHeight,

speedX:(Math.random()-0.5)*0.4,

speedY:(Math.random()-0.5)*0.4

});

}



function animateStones(){

stones.forEach(s=>{

s.x+=s.speedX;
s.y+=s.speedY;

if(s.x>window.innerWidth) s.x=0;
if(s.x<0) s.x=window.innerWidth;

if(s.y>window.innerHeight) s.y=0;
if(s.y<0) s.y=window.innerHeight;

s.el.style.transform=`translate(${s.x}px,${s.y}px)`;

});

requestAnimationFrame(animateStones);

}

animateStones();



/* ======================
gyroscopic effect
====================== */

document.addEventListener("mousemove",e=>{

let x=(window.innerWidth/2-e.pageX)/60;
let y=(window.innerHeight/2-e.pageY)/60;

stones.forEach(s=>{

s.el.style.transform+=` rotateX(${y}deg) rotateY(${x}deg)`;

});

});