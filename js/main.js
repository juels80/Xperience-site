// Xperience — shared site behavior

document.addEventListener('DOMContentLoaded', function () {

  // Contact form: send to Formspree in the background and confirm on the page.
  // Without JavaScript the form still posts normally to Formspree.
  var form = document.querySelector('#contact-form');
  var status = document.querySelector('#form-status');
  if (!form || !window.fetch) return;

  var button = form.querySelector('button[type="submit"]');

  function show(message, kind) {
    if (!status) return;
    status.textContent = message;
    status.classList.remove('success', 'error');
    status.classList.add('visible', kind);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (button) { button.disabled = true; button.textContent = 'Sending…'; }

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
      .then(function (res) {
        if (res.ok) {
          form.reset();
          show("Thank you — your inquiry has been sent. We'll be in touch soon.", 'success');
          return;
        }
        return res.json().then(function (data) {
          var detail = data && data.errors ? data.errors.map(function (err) { return err.message; }).join(' ') : '';
          show(detail || 'Something went wrong. Please try again, or email christopher@xperiencestudio.org.', 'error');
        });
      })
      .catch(function () {
        show('Could not send — check your connection, or email christopher@xperiencestudio.org.', 'error');
      })
      .then(function () {
        if (button) { button.disabled = false; button.textContent = 'Send Inquiry'; }
      });
  });

});
