(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };
  var t = I18N.t;

  // ---- Checklist (saved locally) ----
  var COUNT = 9;
  var KEY = 'mileage-check-v3';
  var state = [];
  try { state = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { state = []; }

  var list = $('checklist-list');
  var spans = [];
  for (var n = 0; n < COUNT; n++) {
    (function (i) {
      var li = document.createElement('li');
      var label = document.createElement('label');
      var cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = !!state[i];
      cb.addEventListener('change', function () {
        state[i] = cb.checked;
        try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
      });
      var span = document.createElement('span');
      spans.push(span);
      label.appendChild(cb);
      label.appendChild(span);
      li.appendChild(label);
      list.appendChild(li);
    })(n);
  }
  function renderChecklist() {
    spans.forEach(function (s, i) { s.textContent = t('js.chk.' + (i + 1)); });
  }

  $('reset-check').addEventListener('click', function () {
    state = [];
    try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
    list.querySelectorAll('input').forEach(function (cb) { cb.checked = false; });
  });
  $('print-btn').addEventListener('click', function () { window.print(); });

  // ---- Active nav link (underline follows the section in view) ----
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.top nav a'));
  var targets = navLinks.map(function (l) { return document.querySelector(l.getAttribute('href')); });
  function updateNav() {
    var current = 0;
    targets.forEach(function (el, i) { if (el && el.getBoundingClientRect().top <= 120) current = i; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = targets.length - 1;
    navLinks.forEach(function (l, i) {
      l.classList.toggle('active', i === current);
      if (i === current) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  window.addEventListener('resize', updateNav);
  updateNav();

  // ---- Language ----
  I18N.onChange(renderChecklist);
  I18N.init();
})();
