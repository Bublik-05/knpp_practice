/**
 * KAES — CMS-Compatible Theme
 * main.js — Vanilla JavaScript interactivity
 * No React, No Next.js, No frameworks
 */

document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  initMegaMenu();
  initSearchToggle();
  initSlideshow();
  initNewsCarousel();
  initAccordion();
  initAboutTabs();
  initAtomTabs();
  initProjectTabs();
  initMapSection();
  initEmissionsCalculator();
  initFooterForm();
  initContactForm();
  initNewsFilter();
  initActiveNavLink();
  initUrlSectionNav();
});

/* ─── ACTIVE NAV LINK ─── */
function initActiveNavLink() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-menu__link').forEach(function (link) {
    const href = link.getAttribute('href') || '';
    const base = href.split('?')[0];
    if (base === '/' ? path === '/' : (path === base || path.startsWith(base + '/'))) {
      link.classList.add('active');
    }
  });
}

/* ─── MOBILE MENU ─── */
function initMobileMenu() {
  const burger = document.getElementById('mobile-burger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
    // Toggle icon
    const icon = burger.querySelector('svg');
    if (icon) {
      icon.innerHTML = isOpen
        ? '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
        : '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
    }
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ─── MEGA MENU (Burger Drawer) ─── */
function initMegaMenu() {
  const megaBtn = document.getElementById('mega-menu-btn');
  const megaPanel = document.getElementById('mega-menu-panel');
  const megaBackdrop = document.getElementById('mega-menu-backdrop');
  const megaClose = document.getElementById('mega-menu-close');
  if (!megaBtn || !megaPanel) return;

  function openMega() {
    megaPanel.classList.add('open');
    if (megaBackdrop) megaBackdrop.classList.add('open');
  }

  function closeMega() {
    megaPanel.classList.remove('open');
    if (megaBackdrop) megaBackdrop.classList.remove('open');
  }

  megaBtn.addEventListener('click', function () {
    megaPanel.classList.contains('open') ? closeMega() : openMega();
  });

  if (megaClose) megaClose.addEventListener('click', closeMega);
  if (megaBackdrop) megaBackdrop.addEventListener('click', closeMega);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMega();
  });
}

/* ─── SEARCH TOGGLE ─── */
function initSearchToggle() {
  const btn = document.getElementById('search-toggle');
  const wrap = document.getElementById('search-wrap');
  const input = document.getElementById('search-input');
  if (!btn || !wrap) return;

  btn.addEventListener('click', function () {
    const visible = wrap.classList.toggle('visible');
    if (visible && input) input.focus();
  });

  document.addEventListener('click', function (e) {
    if (!btn.contains(e.target) && !wrap.contains(e.target)) {
      wrap.classList.remove('visible');
    }
  });
}

/* ─── SLIDESHOW ─── */
function initSlideshow() {
  const slideshow = document.querySelector('.slideshow');
  if (!slideshow) return;

  const slides = slideshow.querySelectorAll('.slideshow__slide');
  if (!slides.length) return;

  // Find active by current filename (works for both server paths and local file:// URLs)
  const pathname = window.location.pathname;
  const currentFile = pathname.split('/').pop() || 'index.html';
  let activeIndex = -1; // -1 means keep the HTML-preset active class

  slides.forEach(function (slide, i) {
    const href = (slide.dataset.href || '').split('?')[0];
    const hrefFile = href.split('/').pop() || 'index.html';
    if (hrefFile === currentFile) activeIndex = i;
  });

  // If running on a server with path-based routing, fall back to path match
  if (activeIndex === -1) {
    slides.forEach(function (slide, i) {
      const href = (slide.dataset.href || '').split('?')[0];
      if (pathname === '/' + href || pathname.startsWith('/' + href + '/') || pathname.endsWith('/' + href)) {
        activeIndex = i;
      }
    });
  }

  function setActive(index) {
    slides.forEach(function (slide, i) {
      slide.classList.toggle('active', i === index);
    });
  }

  // Only override HTML active class if we found a match
  if (activeIndex !== -1) setActive(activeIndex);

  slides.forEach(function (slide, i) {
    slide.addEventListener('click', function () {
      if (!slide.classList.contains('active')) {
        const href = slide.dataset.href;
        if (href) window.location.href = href;
      }
    });
  });
}

/* ─── NEWS CAROUSEL ─── */
function initNewsCarousel() {
  const track = document.querySelector('.news-carousel__track');
  if (!track) return;

  const cards = Array.from(track.querySelectorAll('.news-card'));
  const n = cards.length;
  if (!n) return;

  let active = 0;
  const CARD_W = 520;
  const SIDE_W = 430;
  const X_STEP = 500;
  const SCALE = 0.82;

  function getPos(i) {
    let p = i - active;
    while (p > Math.floor(n / 2)) p -= n;
    while (p < -Math.floor(n / 2)) p += n;
    return p;
  }

  function render() {
    cards.forEach(function (card, i) {
      const pos = getPos(i);
      const isActive = pos === 0;
      const visible = Math.abs(pos) <= 1;

      const scale = isActive ? 1 : SCALE;
      const xOffset = pos * X_STEP;
      const opacity = visible ? 1 : 0;
      const zIndex = isActive ? 3 : (visible ? 2 : 0);
      const width = isActive ? CARD_W : SIDE_W;

      card.style.width = width + 'px';
      card.style.transform = 'translateX(calc(-50% + ' + xOffset + 'px)) scale(' + scale + ')';
      card.style.transformOrigin = 'bottom center';
      card.style.opacity = opacity;
      card.style.zIndex = zIndex;
      card.style.pointerEvents = visible ? 'auto' : 'none';

      card.classList.toggle('active', isActive);
      card.classList.toggle('side', !isActive && visible);
      card.classList.toggle('hidden', !visible);

      card.style.cursor = isActive ? 'default' : 'pointer';
    });
  }

  render();

  cards.forEach(function (card, i) {
    card.addEventListener('click', function () {
      if (!card.classList.contains('active')) {
        const pos = getPos(i);
        navigate(pos > 0 ? 1 : -1);
      }
    });
  });

  function navigate(dir) {
    active = (active + dir + n) % n;
    render();
  }

  const prevBtn = document.getElementById('news-prev');
  const nextBtn = document.getElementById('news-next');
  if (prevBtn) prevBtn.addEventListener('click', function () { navigate(-1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { navigate(1); });
}

/* ─── FAQ ACCORDION ─── */
function initAccordion() {
  document.querySelectorAll('.accordion-item__trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const item = trigger.closest('.accordion-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');
      // Close siblings
      const parent = item.parentElement;
      if (parent) {
        parent.querySelectorAll('.accordion-item').forEach(function (sibling) {
          sibling.classList.remove('open');
        });
      }
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ─── ABOUT PAGE TABS ─── */
function initAboutTabs() {
  const navBtns = document.querySelectorAll('.about-nav__btn');
  const sections = document.querySelectorAll('.about-section-content');
  if (!navBtns.length) return;

  // Read section from URL
  const params = new URLSearchParams(window.location.search);
  const initSection = params.get('section') || navBtns[0]?.dataset.section || '';

  function activateSection(section) {
    navBtns.forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.section === section);
    });
    sections.forEach(function (sec) {
      sec.classList.toggle('active', sec.dataset.section === section);
    });
    // Update URL without reload
    const url = new URL(window.location);
    url.searchParams.set('section', section);
    window.history.replaceState({}, '', url);
  }

  navBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      activateSection(btn.dataset.section);
    });
  });

  // Activate initial
  if (initSection) {
    activateSection(initSection);
  } else if (navBtns[0]) {
    activateSection(navBtns[0].dataset.section);
  }
}

/* ─── ATOM PAGE TABS ─── */
function initAtomTabs() {
  const navBtns = document.querySelectorAll('.atom-nav__btn');
  const panels = document.querySelectorAll('.atom-section-panel');
  if (!navBtns.length) return;

  const params = new URLSearchParams(window.location.search);
  const initSection = params.get('section') || navBtns[0]?.dataset.section || '';

  function activate(section) {
    navBtns.forEach(function (btn) { btn.classList.toggle('active', btn.dataset.section === section); });
    panels.forEach(function (panel) { panel.classList.toggle('active', panel.dataset.section === section); });
    const url = new URL(window.location);
    url.searchParams.set('section', section);
    window.history.replaceState({}, '', url);
  }

  navBtns.forEach(function (btn) {
    btn.addEventListener('click', function () { activate(btn.dataset.section); });
  });

  activate(initSection || (navBtns[0] && navBtns[0].dataset.section));
}

/* ─── PROJECT TABS ─── */
function initProjectTabs() {
  const tabs = document.querySelectorAll('.project-tab');
  const panels = document.querySelectorAll('.project-panel');
  if (!tabs.length) return;

  const params = new URLSearchParams(window.location.search);
  const initTab = params.get('tab') || tabs[0]?.dataset.tab || '';

  function activate(tab) {
    tabs.forEach(function (t) { t.classList.toggle('active', t.dataset.tab === tab); });
    panels.forEach(function (p) { p.classList.toggle('active', p.dataset.tab === tab); });
    const url = new URL(window.location);
    url.searchParams.set('tab', tab);
    window.history.replaceState({}, '', url);
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () { activate(tab.dataset.tab); });
  });

  activate(initTab || (tabs[0] && tabs[0].dataset.tab));
}

/* ─── INTERACTIVE MAP ─── */
function initMapSection() {
  const pins = document.querySelectorAll('.map-pin');
  const popup = document.getElementById('map-popup');
  const hint = document.getElementById('map-hint');
  const closeBtn = document.getElementById('map-popup-close');
  if (!pins.length || !popup) return;

  function closePinPopup() {
    popup.classList.remove('visible');
    pins.forEach(function (p) { p.classList.remove('active'); });
    if (hint) hint.textContent = 'Нажмите на метку';
  }

  pins.forEach(function (pin) {
    pin.addEventListener('click', function (e) {
      e.stopPropagation();
      const cityId = pin.dataset.city;
      const isActive = pin.classList.contains('active');

      if (isActive) { closePinPopup(); return; }

      pins.forEach(function (p) { p.classList.remove('active'); });
      pin.classList.add('active');

      // Fill popup from data
      const name = pin.dataset.name || '';
      const badge = pin.dataset.badge || '';
      const desc = pin.dataset.desc || '';
      const tags = (pin.dataset.tags || '').split('|').filter(Boolean);
      const img = pin.dataset.img || '';

      popup.querySelector('.map-popup__title').textContent = name;
      popup.querySelector('.map-popup__badge').textContent = badge;
      popup.querySelector('.map-popup__desc').textContent = desc;

      const imgEl = popup.querySelector('.map-popup__img');
      if (imgEl) {
        imgEl.src = img;
        imgEl.alt = name;
      }

      const tagsEl = popup.querySelector('.map-popup__tags');
      if (tagsEl) {
        tagsEl.innerHTML = tags.map(function (tag) {
          return '<span class="map-popup__tag">' + tag + '</span>';
        }).join('');
      }

      popup.classList.add('visible');
      if (hint) hint.textContent = 'Нажмите в любое место, чтобы закрыть';
    });
  });

  // Close on backdrop
  const mapInner = document.querySelector('.map-inner');
  if (mapInner) {
    mapInner.addEventListener('click', function () { closePinPopup(); });
    popup.addEventListener('click', function (e) { e.stopPropagation(); });
  }

  if (closeBtn) closeBtn.addEventListener('click', closePinPopup);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePinPopup();
  });
}

/* ─── EMISSIONS CALCULATOR ─── */
function initEmissionsCalculator() {
  const form = document.getElementById('calc-form');
  if (!form) return;

  const consumptionInput = form.querySelector('[name="consumption"]');
  const peopleInput = form.querySelector('[name="people"]');
  const resultEl = document.getElementById('calc-result');
  const savedEl = document.getElementById('calc-saved');

  // CO2 grams per kWh — coal: ~820, nuclear: ~12
  const CO2_COAL = 820;
  const CO2_NUCLEAR = 12;

  function calculate() {
    const consumption = parseFloat(consumptionInput?.value) || 0;
    const people = parseInt(peopleInput?.value) || 1;
    const total = consumption * people;
    const coalCO2 = (total * CO2_COAL / 1000).toFixed(1); // kg
    const nuclearCO2 = (total * CO2_NUCLEAR / 1000).toFixed(1);
    const saved = (coalCO2 - nuclearCO2).toFixed(1);

    if (resultEl) resultEl.textContent = coalCO2 + ' кг CO₂';
    if (savedEl) savedEl.textContent = 'Экономия: ' + saved + ' кг CO₂';
  }

  if (consumptionInput) consumptionInput.addEventListener('input', calculate);
  if (peopleInput) peopleInput.addEventListener('input', calculate);
  calculate();
}

/* ─── FOOTER FORM ─── */
function initFooterForm() {
  const form = document.getElementById('footer-form');
  if (!form) return;

  const success = document.getElementById('footer-success');
  const resetBtn = document.getElementById('footer-reset');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    if (success) success.classList.add('visible');
    /* CMS: POST to /api/contact or CMS-specific endpoint */
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      form.reset();
      form.style.display = 'flex';
      if (success) success.classList.remove('visible');
    });
  }
}

/* ─── CONTACT FORM ─── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    if (btn) {
      btn.textContent = 'Отправлено!';
      btn.disabled = true;
    }
    /* CMS: POST to /api/contact */
    setTimeout(function () {
      form.reset();
      if (btn) { btn.textContent = 'Отправить'; btn.disabled = false; }
    }, 3000);
  });
}

/* ─── NEWS FILTER ─── */
function initNewsFilter() {
  const filterBtns = document.querySelectorAll('.news-filter__btn');
  const newsCards = document.querySelectorAll('[data-category]');
  if (!filterBtns.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      const cat = btn.dataset.category || 'all';
      newsCards.forEach(function (card) {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ─── URL SECTION NAV (for pages with ?section= links) ─── */
function initUrlSectionNav() {
  // Smooth scroll to section via anchor links
  document.querySelectorAll('a[href*="#"]').forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const hash = href.split('#')[1];
    if (!hash) return;
    link.addEventListener('click', function (e) {
      const target = document.getElementById(hash);
      if (target && href.startsWith('#')) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
