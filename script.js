const container = document.getElementById('container');
const signInButton = document.getElementById('login');
const signUpButton = document.getElementById('register');

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
    container.classList.add('left-panel-active');
});

signUpButton.addEventListener('click', () => {
    container.classList.remove('left-panel-active');
    container.classList.add('right-panel-active');
});