const lantern = document.querySelector('.lantern');
let angle = 0;
let interval = setInterval(rotate, 100);

function rotate() {
    angle += 5;
    lantern.style.transform = `rotateY(${angle}deg)`;
}
lantern.addEventListener('mouseenter', () => clearInterval(interval));
lantern.addEventListener('mouseleave', () => interval = setInterval(rotate, 100));
