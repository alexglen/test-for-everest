document.querySelector('#checkbox').addEventListener('change', function () {
    if (this.checked) {
        document.querySelector('.fake').src = './assets/checkbox1.png';
    } else {
        document.querySelector('.fake').src = './assets/checkbox.png';
    }
});