const processForm = form => {
  const data = new FormData(form)
  data.append('form-name', 'newsletter');
  fetch('/', {
    method: 'POST',
    body: data,
  })
  .then(() => {
    form.innerHTML = '<p class="form--success mb-0"><strong>Casi terminamos</strong>, revisa en tu correo en búsqueda del mensaje de confirmación.</p>';
  })
  .catch(error => {
    form.innerHTML = `<p class="form--error mb-0">Oops. Algo no salió bien: ${error}</p>`;
  })
}

const emailForm = document.querySelector('.email-form')
if (emailForm) {
  emailForm.addEventListener('submit', e => {
    e.preventDefault();
    processForm(emailForm);
  })
}