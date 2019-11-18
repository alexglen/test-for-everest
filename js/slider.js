const coursesContainer = document.querySelector('.currencies-block-cources');
const leftButton = document.querySelector('.currencies-block-left-arrow img');
const rightButton = document.querySelector('.currencies-block-right-arrow img');

rightButton.addEventListener('click', function () {
    coursesContainer.appendChild(coursesContainer.firstElementChild);
});

leftButton.addEventListener('click', function () {
    coursesContainer.prepend(coursesContainer.lastElementChild);
});