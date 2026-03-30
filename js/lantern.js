const cube = document.querySelector('.cube');
let angleY = 0;
let angleX = 0;
let interval;

function rotateCube() {
    angleY += 1;
    angleX += 0.5;
    cube.style.transform = `rotateY(${angleY}deg) rotateX(${angleX}deg)`;
}
interval = setInterval(rotateCube, 30);
cube.addEventListener('mouseenter', () => clearInterval(interval));
cube.addEventListener('mouseleave', () => interval = setInterval(rotateCube, 30));
