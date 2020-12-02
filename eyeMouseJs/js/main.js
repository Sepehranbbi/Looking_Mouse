

document.querySelector('body').addEventListener('mousemove', eyeball);

function eyeball() {
    const eye = document.querySelectorAll('.eye');
    eye.forEach(function (eye) {
        let X = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let Y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

        let radian = Math.atan2(event.pageX - X, event.pageY - Y);

        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rotation + "deg)";
    });
}

