const btnContainer = document.getElementById('btn-container');
const btn = document.getElementById('btn');
const nav = document.querySelector('nav');


btn.addEventListener('click', () => {
    btnContainer.classList.toggle('active')
    nav.classList.toggle('active')
});