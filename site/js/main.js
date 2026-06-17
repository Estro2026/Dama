// ── Scroll Reveal ──
(function () {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(function (el) { io.observe(el); });
})();

// ── Navbar scroll ──
(function () {
  var navbar = document.querySelector('.navbar');
  if (!navbar) return;
  function update() {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }
  update();
  window.addEventListener('scroll', update, { passive: true });
})();

// ── FAQ accordion ──
(function () {
  var btns = document.querySelectorAll('.faq__btn');
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer = document.getElementById(btn.getAttribute('aria-controls'));
      var isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all
      btns.forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
        var a = document.getElementById(b.getAttribute('aria-controls'));
        if (a) a.style.maxHeight = '0';
      });

      // Open clicked if it was closed
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
})();

// ── Smooth scroll for anchor links ──
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var offset = 72; // navbar height
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
})();

// ── Hero form submission ──
(function () {
  var forms = document.querySelectorAll('.js-formspree');
  forms.forEach(function (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var btn = form.querySelector('[type="submit"]');
      var err = form.querySelector('.form-error');
      btn.disabled = true;
      btn.textContent = 'Invio in corso…';
      if (err) err.classList.remove('visible');

      var data = new FormData(form);
      try {
        var res = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' }
        });
        if (!res.ok) throw new Error();
        window.location.href = 'https://estro2026.github.io/Dama/grazie/';
      } catch (ex) {
        if (err) err.classList.add('visible');
        btn.disabled = false;
        btn.textContent = 'Invia richiesta';
      }
    });
  });
})();
