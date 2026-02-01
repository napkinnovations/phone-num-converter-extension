console.log('Popup script loaded');
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('main-form');
    if (form) form.addEventListener('submit', onSubmit);
    document.querySelector('button').addEventListener('click', () => {
        console.log("Button clicked");
    });
});

function onSubmit(event) {
    event.preventDefault(); // prevent popup from closing/reloading
    console.log('Form submitted');
    const phoneNum = document.getElementById('phone-input')?.value || '';
    const digitsOnly = phoneNum.replace(/\D/g, '');
    document.getElementById('result-label').textContent = digitsOnly || '(no digits)';
}
