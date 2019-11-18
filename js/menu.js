const container = document.querySelector('.container');
const wrapMenu = document.querySelector('.wrap-menu');
const burger = document.querySelector('.header-gamburger');
const everestLink = document.querySelector('#everest');

function openDrawer(e) {
    e.stopPropagation();
    this.classList.toggle('active');
    wrapMenu.classList.add('open-block');
    container.classList.add('backdrop');

    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = scrollBarPadding;
    
}

function closeDrawer() {
    wrapMenu.classList.remove('open-block');
    document.body.style.overflow = '';
    container.classList.remove('backdrop');
    document.body.style.backgroundColor = 'white';
    document.body.style.paddingRight = '0px';
}

burger.addEventListener('click', openDrawer);
container.addEventListener('click', closeDrawer);
document.body.addEventListener('keyup', function ({keyCode}) {
    if (keyCode === 27) {
        closeDrawer();
    }
});

everestLink.addEventListener('click', closeDrawer);