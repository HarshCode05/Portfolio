/* ======================
   typing animation
====================== */

const text = "Java Developer | Problem Solver";
let index = 0;
const speed = 70;

function typeEffect(){
const el = document.getElementById("typing");

if(index < text.length){
el.innerHTML += text.charAt(index);
index++;
setTimeout(typeEffect, speed);
}
}

typeEffect();



/* ======================
   scroll reveal
====================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

const top = sec.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
sec.classList.add("show");
}

});

});



/* ======================
   cursor glow
====================== */

const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});



/* ======================
   gyroscopic tilt
====================== */

document.addEventListener("mousemove",(e)=>{

const x = (window.innerWidth/2 - e.pageX)/30;
const y = (window.innerHeight/2 - e.pageY)/30;

document.querySelector("header").style.transform =
`rotateY(${x}deg) rotateX(${y}deg)`;

});



/* ======================
   3D particle background
====================== */

const canvas = document.createElement("canvas");
canvas.id = "particles";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<120;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speedX:(Math.random()-0.5)*0.5,
speedY:(Math.random()-0.5)*0.5
});

}

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x += p.speedX;
p.y += p.speedY;

if(p.x > canvas.width) p.x = 0;
if(p.x < 0) p.x = canvas.width;

if(p.y > canvas.height) p.y = 0;
if(p.y < 0) p.y = canvas.height;

ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fillStyle="rgba(255,255,255,0.7)";
ctx.fill();

});

requestAnimationFrame(animateParticles);

}

animateParticles();



/* resize fix */

window.addEventListener("resize",()=>{

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

});