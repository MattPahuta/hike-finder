// *** Mobile Navigation *** //
const navList = document.getElementById('primary-navigation'); // ToDo: move inside navToggle listener?
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
});

// Render signup/login dialog modal
function renderDialogModal(modal) {
  const dialog = document.querySelector('#modal'); // get the dialog element
  dialog.innerHTML = ''; // clear dialog content

  const dialogContent = document.createElement('div');
  dialogContent.classList.add('dialog-content');

  let title, emailType, passwordType, submitButton, accountStatus; // initialize variables for modal content
  // Check if generating signup or login modal
  if (modal === 'signup') {
    // assign variables
    title = 'Sign up';
    emailType = 'new-email';
    passwordType = 'new-password';
    submitButton = 'Sign Up';
    accountStatus = `Already have an account? <a href="#" data-modal="login">Login</a>`;
  }
  if (modal === 'login') {
    // assign variables
    title = 'Log in';
    emailType = 'email';
    passwordType = 'password';
    submitButton = 'Log In';
    accountStatus = `Don't have an account? <a href="#" data-modal="signup">Sign up for free</a>`;
  }

  dialogContent.innerHTML = `
    <h2>${title}</h2>
    <form class="modal-form">
      <label for="${emailType}">Email</label>
      <input id="${emailType}" type="email" name="${emailType}" placeholder="Email address" required>
      <label for="${passwordType}">Password</label>
      <input id="${passwordType}" type="password" name="${passwordType}" placeholder="Password" required>
      <button type="submit" class="button btn-primary btn-auth">${submitButton}</button>
    </form>
    <p>${accountStatus}</p>
    <p class="disclaimer">By continuing to use HikeFinder, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
    `

  dialog.appendChild(dialogContent); // append dialog modal to body
  handleDialogModal(); // call handleDialogModal for show/close functionality

}

function handleDialogModal() {
  const dialog = document.querySelector('dialog');
  dialog.showModal();

  dialog.addEventListener("click", e => {
    const dialogDimensions = dialog.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.close()
    }
  })
}

// Copyright date
const dateSnapshot = new Date();
document.getElementById('copy-year').textContent = dateSnapshot.getFullYear();

// Event Listeners
document.addEventListener('click', e => {
  // ToDo: move navToggle listener here

  if (e.target.dataset.modal) {
    renderDialogModal(e.target.dataset.modal)
  }

})
