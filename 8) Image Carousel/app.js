let btnRight = document.getElementById('btnRight');
let btnLeft = document.getElementById('btnLeft');
let slider = document.getElementById('slider');


btnLeft.addEventListener('click', () => {
    slider.scrollLeft -= 220;
});

btnRight.addEventListener('click', () => {
    slider.scrollLeft += 220;
});

