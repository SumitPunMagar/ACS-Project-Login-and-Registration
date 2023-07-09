const loginPage = document.querySelector('.login-page');
const loginLink = document.querySelector('.login_link');
const registerLink = document.querySelector('.register_link');

registerLink.addEventListener('click', () => {
  loginPage.classList.add('active');
});

loginLink.addEventListener('click', () => {
  loginPage.classList.remove('active');
});





