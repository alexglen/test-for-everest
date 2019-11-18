const buttons = document.querySelectorAll('.exchange-block-slider .element');
const textOfSlider = document.querySelectorAll('.exchange-block-content');

for (const slider of textOfSlider) {
    slider.style.display = 'none';
}
textOfSlider[0].style.display = 'block';

for (let i = 0; i < buttons.length; i++) {
    buttons[0].style.borderWidth = '0 1px 0 0';
    buttons[i].addEventListener('click', function () {
        for (const btn of buttons) {
            btn.style.borderBottom = '2px solid #B7B7B7';
        }
        this.style.borderBottom = 'none';

        for (const slider of textOfSlider) {
            slider.style.display = 'none';
        }
        textOfSlider[i].style.display = 'block';
    });
}

const icon = document.querySelector('.img-expand');
const exchangeBlockSlider = document.querySelector('.exchange-block-slider');
icon.addEventListener('click', function () {
    exchangeBlockSlider.classList.toggle('active');
    if (exchangeBlockSlider.classList.contains('active')) {
        icon.firstElementChild.src = './assets/hidden.png';
    } else {
        icon.firstElementChild.src = './assets/expand.png';
    }
});