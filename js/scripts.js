const menuTrigger = document.querySelector('#menuTrigger');
const menu = document.querySelector('#menuBlock');

function triggerMenu() {
    if(event.target.tagName == 'BUTTON') {
        menu.classList.add('active');
    } else if (event.target.tagName !== 'A') {
        menu.classList.remove('active');
    }
}

menu.addEventListener('click', triggerMenu)