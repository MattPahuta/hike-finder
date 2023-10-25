// *** Mobile Navigation *** //
const navList = document.getElementById('primary-navigation');
const navToggle = document.getElementById('mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const body = document.querySelector('body');
  const visibility = navList.getAttribute('data-visible');

  if (visibility === 'false') {
    navList.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    navList.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }

  body.classList.toggle('no-scroll');
  // console.log('toggle clicked')
  // console.log(visibility)
});

// Signup and Login button interaction
const signUpBtn = document.getElementById('signup-btn');
const logInBtn = document.getElementById('login-btn');

signUpBtn.addEventListener('click', () => {
  console.log('clicked')
});

// *** Copyright Date *** // 
const dateSnapshot = new Date();
document.getElementById('copy-year').textContent = dateSnapshot.getFullYear();


 