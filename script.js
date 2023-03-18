const pass1 = document.getElementById('password1');
const pass2 = document.getElementById('password2');
const error = document.querySelector('.error');

pass2.addEventListener("input", function (event) {
if (pass1.value == pass2.value) {
    error.textContent = ''
}
else if (pass1.value != pass2.value) {
    error.textContent = 'Passwords do not match';
}
});