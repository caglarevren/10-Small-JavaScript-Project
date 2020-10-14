const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement('div');

    notif.classList.add('container');
    notif.innerText = 'I\'m your father Luke';

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}