const cube = document.querySelector('.cube');
let angleY = 0;
let angleX = 0;
let interval;

function rotateCube() {
    angleY += 1;
    angleX += 0.5;
    cube.style.transform = `rotateY(${angleY}deg) rotateX(${angleX}deg)`;
}

function startRotation() {
    if (!interval) interval = setInterval(rotateCube, 30);
}

function stopRotation() {
    clearInterval(interval);
    interval = null;
}

startRotation();

cube.addEventListener('mouseenter', stopRotation);
cube.addEventListener('mouseleave', startRotation);
