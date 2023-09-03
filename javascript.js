const filled = document.querySelector('.filled');

function update () {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / totalHeight) * 100;
    filled.style.width = `${scrolled}%`;
    requestAnimationFrame(update);
}


update();