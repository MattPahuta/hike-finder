// *** Mobile Navigation *** //
const navList = document.getElementById('primary-navigation');
const navToggle = document.getElementById('mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = navList.getAttribute('data-visible');

  if (visibility === 'false') {
    navList.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    navList.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }

  console.log('toggle clicked')
  console.log(visibility)
});