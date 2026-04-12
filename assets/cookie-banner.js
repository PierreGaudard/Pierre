(function () {
  if (localStorage.getItem('mlrh_cookie_consent')) return;

  var banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Gestion des cookies');

  // Determine relative path to politique-de-confidentialite.html
  var path = window.location.pathname;
  var privacyHref = 'politique-de-confidentialite.html';
  if (path.indexOf('/guides/') !== -1 || path.indexOf('/comparatifs/') !== -1 ||
      path.indexOf('/alternatives/') !== -1 || path.indexOf('/avis/') !== -1 ||
      path.indexOf('/outils/') !== -1 || path.indexOf('/auteur/') !== -1) {
    privacyHref = '../politique-de-confidentialite.html';
  }

  banner.innerHTML =
    '<div class="cookie-banner-inner">' +
      '<p class="cookie-banner-text">' +
        'Ce site utilise des cookies techniques essentiels et des cookies d\u2019analyse anonymis\u00e9s pour am\u00e9liorer votre exp\u00e9rience. ' +
        'En savoir plus dans notre <a href="' + privacyHref + '">politique de confidentialit\u00e9</a>.' +
      '</p>' +
      '<div class="cookie-banner-actions">' +
        '<button class="cookie-btn cookie-btn-refuse" id="cookie-refuse">Refuser</button>' +
        '<button class="cookie-btn cookie-btn-accept" id="cookie-accept">Accepter</button>' +
      '</div>' +
    '</div>';

  document.body.appendChild(banner);

  // Show with slight delay for smooth animation
  setTimeout(function () {
    banner.classList.add('visible');
  }, 300);

  function closeBanner(choice) {
    localStorage.setItem('mlrh_cookie_consent', choice);
    banner.classList.remove('visible');
    setTimeout(function () {
      banner.remove();
    }, 400);
  }

  document.getElementById('cookie-accept').addEventListener('click', function () {
    closeBanner('accepted');
  });

  document.getElementById('cookie-refuse').addEventListener('click', function () {
    closeBanner('refused');
  });
})();

// TOC toggle on mobile
(function() {
  var toc = document.querySelector('.toc');
  var tocTitle = document.querySelector('.toc-title');
  if (!toc || !tocTitle) return;
  tocTitle.addEventListener('click', function() {
    toc.classList.toggle('open');
  });
})();
