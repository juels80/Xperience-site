// Xperience — shared site behavior

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('nav ul');
  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      var isOpen = navList.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Contact form handling
  var form = document.querySelector('#contact-form');
  var status = document.querySelector('#form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // NOTE: This is a placeholder handler. Plain static HTML can't send
      // email on its own — wire this up to a real form backend such as
      // Formspree (https://formspree.io) or Netlify Forms before launch.
      // Example with Formspree:
      //   form.action = "https://formspree.io/f/YOUR_FORM_ID";
      //   form.method = "POST";
      //   (then remove this preventDefault-based mock and let it submit)

      if (status) {
        status.textContent = "Thanks — this is a demo submission. Connect a real form backend (see js/main.js) before going live.";
        status.classList.remove('error');
        status.classList.add('visible', 'success');
      }
      form.reset();
    });
  }

});
