// scrollWidth
function getScrollbarWidth() {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    outer.style.msOverflowStyle = 'scrollbar';
    document.body.appendChild(outer);
    const inner = document.createElement('div');
    outer.appendChild(inner);
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
    outer.parentNode.removeChild(outer);
    return scrollbarWidth;
}

const scrollBarWidth = getScrollbarWidth();
const scrollBarPadding = `${scrollBarWidth}px`;


const backdrop = document.querySelector('.container');
backdrop.addEventListener('click', closeModal);

function openModal(form) {
    backdrop.classList.add('backdrop');
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    form.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = scrollBarPadding;
}

function closeModal() {
    loginForm.style.display = 'none';
    forgotPasswordForm.style.display = 'none';
    registrationForm.style.display = 'none';

    document.body.style.paddingRight = '0';
    document.body.style.overflow = '';
    document.body.style.backgroundColor = 'white';
    backdrop.classList.remove('backdrop');
}

// Close modal windows on escape btn press
document.body.addEventListener('keyup', function ({keyCode}) {
    if (keyCode === 27) {
        closeModal();
    }
});

/* Forms */
const loginForm = document.querySelector('.wrap-form__autorization');
const forgotPasswordForm = document.querySelector('.wrap-form__password');
const registrationForm = document.querySelector('.wrap-form__registration');

/* Buttons */
const signUpButtons = document.querySelectorAll('.sign');
for (let signUpBtn of signUpButtons) {
    signUpBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        openModal(registrationForm);
    });
}

const loginButtons = document.querySelectorAll('.login');
for (let loginBtn of loginButtons) {
    loginBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        openModal(loginForm);
    });
}

/* Links */
const registrationLink = document.querySelector('#toRegistrate');
const forgottenPasswordLink = document.querySelector('#forgotten-password');
const returnToLoginFromForgottenPasswordLink = document.querySelector('.returnBack');
const returnToLoginFromRegistrationLink = document.querySelector('#returnToLogin');

registrationLink.addEventListener('click', function (e) {
    e.preventDefault();
    loginForm.style.display = 'none';
    registrationForm.style.display = 'block';
});

forgottenPasswordLink.addEventListener('click', function (e) {
    e.preventDefault();
    loginForm.style.display = 'none';
    forgotPasswordForm.style.display = 'flex';
});

returnToLoginFromForgottenPasswordLink.addEventListener('click', function (e) {
    e.preventDefault();
    forgotPasswordForm.style.display = 'none';
    loginForm.style.display = 'flex';
});

returnToLoginFromRegistrationLink.addEventListener('click', function (e) {
    e.preventDefault();
    registrationForm.style.display = 'none';
    loginForm.style.display = 'flex';
});