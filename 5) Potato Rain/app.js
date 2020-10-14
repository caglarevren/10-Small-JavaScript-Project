function potatoRain() {
    const potato = document.createElement('div');
    potato.classList.add('potato');

    potato.style.left = Math.random() * 100 + 'vw';
    potato.style.animationDuration = Math.random() * 2 + 3 + 's';

    potato.innerText = '🥔'

    document.body.appendChild(potato);

  setTimeout(() => {
    potato.remove();
  }, 5000);
};

setInterval(potatoRain, 500);