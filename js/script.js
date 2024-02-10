const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = email.value;

  // check if it is a valid email
  if (!isEmail(emailValue)) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
  }
});

function isEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
