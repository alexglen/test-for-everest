const ellipsis = document.querySelectorAll('.ellipsis img');
const servicesBlock = document.querySelectorAll('.services-block');

for (let i = 0; i < ellipsis.length; i++) {
    ellipsis[i].addEventListener('click', function () {
        for (let j = 0; j < ellipsis.length; j++) {
            ellipsis[j].src = './assets/ellipse.png';
            servicesBlock[j].style.display = 'none';
            this.src = './assets/active-ellipse.png';
            servicesBlock[i].style.display = 'flex';
        }
    })
}