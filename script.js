particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 2 }
  }
});

const tilt = document.getElementById("tilt");

document.addEventListener("mousemove", (e) => {

let x = (window.innerWidth / 2 - e.pageX) / 20;
let y = (window.innerHeight / 2 - e.pageY) / 20;

tilt.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;

});

window.addEventListener("deviceorientation", (event) => {

let tiltX = event.gamma / 5;
let tiltY = event.beta / 5;

tilt.style.transform = `rotateY(${tiltX}deg) rotateX(${tiltY}deg)`;

});