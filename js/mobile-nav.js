/* Xperience — slide-in menu behavior. Load with <script src="js/mobile-nav.js" defer></script> */
(function () {
  var body = document.body;
  var openBtn = document.getElementById('xpMenuBtn');
  var closeBtn = document.getElementById('xpCloseBtn');
  var scrim = document.getElementById('xpScrim');
  var panel = document.getElementById('xpMenu');
  if (!openBtn || !closeBtn || !panel) return;

  // Mark the link for the page that is open
  var here = location.pathname.split('/').pop() || 'index.html';
  panel.querySelectorAll('nav a').forEach(function (a) {
    if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
  });

  function isOpen() { return body.classList.contains('xp-nav-open'); }

  function setOpen(open) {
    if (open === isOpen()) return;
    body.classList.toggle('xp-nav-open', open);
    openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) setTimeout(function () { closeBtn.focus(); }, 50);
    else openBtn.focus();
  }

  openBtn.addEventListener('click', function () { setOpen(true); });
  closeBtn.addEventListener('click', function () { setOpen(false); });
  if (scrim) scrim.addEventListener('click', function () { setOpen(false); });

  document.addEventListener('keydown', function (e) {
    if (!isOpen()) return;
    if (e.key === 'Escape') setOpen(false);
    if (e.key === 'Tab') { // keep focus inside the menu
      var f = panel.querySelectorAll('button, a[href]');
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Close if the page is restored from the back/forward cache with the menu open
  window.addEventListener('pageshow', function () {
    body.classList.remove('xp-nav-open');
    openBtn.setAttribute('aria-expanded', 'false');
  });
})();
