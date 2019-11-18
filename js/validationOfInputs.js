// All inputs which we need to validate
const inputs = document.querySelectorAll('input[type]');

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

for (const input of inputs) {
    input.addEventListener('blur', function () {
        let check;
        const value = this.value;
        switch (this.type) {
            case value:
            case 'text':
                check = !!value.trim().length;
                break;
            case 'password':
                check = value.trim().length >= 6;
                break;
            case 'email':
                check = validateEmail(value);
                break;
            default:
                console.error('error');
                break;
        }

        if (check) {
            this.style.border = '1px solid #5673CE';
        } else {
            this.style.border = '1px solid red';
        }
    });
}