

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
  initNewsPageTabs();
  initNewsPageCalendar();
});

/* ─── ACTIVE NAV LINK ─── */
function initActiveNavLink() {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  let currentPage = currentFile.replace('.html', '');

  if (currentPage === '') currentPage = 'index';
  if (currentPage === 'news-detail') currentPage = 'news';
  if (currentPage === 'vacancy-category' || currentPage === 'vacancy-detail') {
    currentPage = 'vacancies';
  }

  document.querySelectorAll('[data-nav-page], .nav-menu__link, .mobile-menu__link, .mega-menu-col__title').forEach(function (link) {
    const dataPage = link.getAttribute('data-nav-page');

    if (dataPage) {
      link.classList.toggle('active', dataPage === currentPage);
      return;
    }

    const href = (link.getAttribute('href') || '').split('?')[0];
    const hrefFile = href.split('/').pop() || 'index.html';
    let hrefPage = hrefFile.replace('.html', '');

    if (hrefPage === '') hrefPage = 'index';

    link.classList.toggle('active', hrefPage === currentPage);
  });
}

/* ─── MOBILE MENU ─── */
function initMobileMenu() {
  // New id is mobile-burger (button.header-mobile-burger)
  const burger = document.getElementById('mobile-burger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!burger || !mobileMenu) return;

  function closeMobile() {
    mobileMenu.classList.remove('open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }

  function openMobile() {
    mobileMenu.classList.add('open');
    burger.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
  }

  burger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.contains('open');
    isOpen ? closeMobile() : openMobile();
  });

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMobile);
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

    megaBtn.classList.add('is-open');
    megaBtn.setAttribute('aria-label', 'Закрыть меню');
    megaBtn.setAttribute('aria-expanded', 'true');

    document.body.style.overflow = 'hidden';
  }

  function closeMega() {
    megaPanel.classList.remove('open');
    if (megaBackdrop) megaBackdrop.classList.remove('open');

    megaBtn.classList.remove('is-open');
    megaBtn.setAttribute('aria-label', 'Открыть меню');
    megaBtn.setAttribute('aria-expanded', 'false');

    document.body.style.overflow = '';
  }

  megaBtn.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();

    megaPanel.classList.contains('open') ? closeMega() : openMega();
  });

  if (megaClose) {
    megaClose.addEventListener('click', function (event) {
      event.preventDefault();
      closeMega();
    });
  }

  if (megaBackdrop) {
    megaBackdrop.addEventListener('click', closeMega);
  }

  megaPanel.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMega);
  });

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
  const tabs = Array.from(document.querySelectorAll('.project-tab'));
  const panels = Array.from(document.querySelectorAll('.project-panel'));

  if (!tabs.length || !panels.length) return;

  // Чтобы старые ссылки тоже работали:
  // ?tab=moinkum, ?tab=moyinkum → mainkum
  const aliases = {
    moinkum: 'mainkum',
    moyinkum: 'mainkum',
    mainkum: 'mainkum',
    balkhash: 'balkhash',
    project3: 'project3',
    project4: 'project4'
  };

  const availableTabs = tabs
    .map(function (tab) {
      return tab.dataset.tab;
    })
    .filter(Boolean);

  function normalizeTab(value) {
    const normalized = aliases[value] || value;
    return availableTabs.includes(normalized) ? normalized : availableTabs[0];
  }

  function activate(tabValue, shouldPushUrl) {
    const tab = normalizeTab(tabValue);

    tabs.forEach(function (item) {
      const isActive = item.dataset.tab === tab;

      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', isActive ? 'true' : 'false');
      item.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    panels.forEach(function (panel) {
      const isActive = panel.dataset.tab === tab;

      panel.classList.toggle('active', isActive);

      if (isActive) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', '');
      }
    });

    const url = new URL(window.location);
    url.searchParams.set('tab', tab);

    if (shouldPushUrl) {
      window.history.pushState({}, '', url);
    } else {
      window.history.replaceState({}, '', url);
    }
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      activate(tab.dataset.tab, true);
    });
  });

  const params = new URLSearchParams(window.location.search);
  activate(params.get('tab') || availableTabs[0], false);
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
  var sourceBtns = document.querySelectorAll('.source-btn');
  var volumeInput = document.getElementById('calc-volume');
  var quickVolBtns = document.querySelectorAll('.quick-vol-btn');
  var errorEl = document.querySelector('.calc-error');

  if (!sourceBtns.length || !volumeInput) return;

  var SOURCES = {
    coal: { label: 'Уголь', factor: 820 },
    gas: { label: 'Газ', factor: 490 },
    nuclear: { label: 'Атомная энергия', factor: 12 },
    solar: { label: 'Солнечная энергия', factor: 40 },
    wind: { label: 'Ветровая энергия', factor: 8 }
  };
  var CAR_TONS = 4.5;
  var selectedSource = 'coal';

  function fmt(n, dec) {
    return new Intl.NumberFormat('ru-RU', { maximumFractionDigits: dec || 0 }).format(n);
  }

  function getInsight(srcId, emissionsTons, ratioToNuclear, carsEquivalent) {
    if (srcId === 'nuclear') {
      return 'При выбранном объеме атомная энергия формирует низкий уровень выбросов CO₂. Это один из самых экологичных вариантов генерации и значительно чище угля и газа.';
    }
    if (srcId === 'wind') {
      return 'При выбранном объеме ветровая энергия показывает один из самых низких уровней выбросов CO₂. Это значительно экологичнее ископаемых источников и сопоставимо с лучшими низкоуглеродными решениями.';
    }
    if (srcId === 'solar') {
      return 'При выбранном объеме солнечная энергия формирует сравнительно низкий уровень выбросов CO₂. Это заметно лучше угля и газа, хотя атомная и ветровая энергия дают ещё более низкий углеродный след.';
    }
    var label = SOURCES[srcId] ? SOURCES[srcId].label.toLowerCase() : srcId;
    return 'При выбранном объеме генерации ' + label + ' формирует значительно более высокий уровень выбросов CO₂ по сравнению с низкоуглеродными источниками. Это сопоставимо примерно с ' + fmt(carsEquivalent) + ' автомобилями в год и в ' + fmt(ratioToNuclear, 1) + ' раз больше, чем атомная энергия.';
  }

  function calculate() {
    var volume = parseFloat(volumeInput.value);

    if (!volumeInput.value.trim() || isNaN(volume) || volume <= 0) {
      if (errorEl) errorEl.classList.add('is-visible');
      return;
    }
    if (errorEl) errorEl.classList.remove('is-visible');

    var src = SOURCES[selectedSource] || SOURCES.coal;
    var emissionsKg = volume * src.factor;
    var emissionsTons = emissionsKg / 1000;
    var nuclearTons = (volume * 12) / 1000;
    var carsEquivalent = emissionsTons / CAR_TONS;
    var ratioToNuclear = nuclearTons > 0 ? emissionsTons / nuclearTons : 0;
    var diffTons = emissionsTons - nuclearTons;

    var resultVal = document.getElementById('calc-result-value');
    var resultSub = document.getElementById('calc-result-sub');
    var insightTxt = document.getElementById('calc-insight-text');
    var statRatio = document.getElementById('stat-ratio');
    var statDiff = document.getElementById('stat-diff');
    var statCars = document.getElementById('stat-cars');

    if (resultVal) resultVal.textContent = fmt(emissionsTons) + ' т';
    if (resultSub) resultSub.textContent = src.label + ' · ' + fmt(volume) + ' МВт·ч';
    if (insightTxt) insightTxt.textContent = getInsight(selectedSource, emissionsTons, ratioToNuclear, carsEquivalent);
    if (statRatio) statRatio.textContent = selectedSource === 'nuclear' ? '1×' : fmt(ratioToNuclear, 1) + '×';
    if (statDiff) statDiff.textContent = fmt(diffTons) + ' т';
    if (statCars) statCars.textContent = '≈ ' + fmt(carsEquivalent);
  }

  // Source button clicks
  sourceBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      sourceBtns.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      selectedSource = btn.dataset.source || 'coal';
      calculate();
    });
  });

  // Quick volume preset buttons
  quickVolBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      volumeInput.value = btn.dataset.volume;
      calculate();
    });
  });

  // Live update on input
  volumeInput.addEventListener('input', calculate);

  // Initial render
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

  const success = document.getElementById('contact-success');
  const btn = form.querySelector('[type="submit"]');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (btn) {
      btn.textContent = 'Отправка…';
      btn.disabled = true;
    }

    if (success) success.hidden = true;

    /* CMS: здесь потом можно сделать POST в WordPress/CMS endpoint */

    setTimeout(function () {
      form.reset();

      if (success) success.hidden = false;

      if (btn) {
        btn.textContent = 'Отправить';
        btn.disabled = false;
      }
    }, 700);
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

/* ─── NEWS PAGE TABS ─── */
function initNewsPageTabs() {
  var sidebarTabs  = document.querySelectorAll('.news-sidebar__tab[data-tab]');
  var mobileTabs   = document.querySelectorAll('.news-mobile-tab[data-tab]');
  var panels       = document.querySelectorAll('.news-panel[data-tab]');

  if (!panels.length) return;

  function activateTab(tabValue) {
    sidebarTabs.forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.tab === tabValue);
    });
    mobileTabs.forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.tab === tabValue);
    });
    panels.forEach(function (panel) {
      panel.classList.toggle('is-active', panel.dataset.tab === tabValue);
    });
  }

  sidebarTabs.forEach(function (btn) {
    btn.addEventListener('click', function () { activateTab(btn.dataset.tab); });
  });
  mobileTabs.forEach(function (btn) {
    btn.addEventListener('click', function () { activateTab(btn.dataset.tab); });
  });

  // Default: activate first tab
  var first = sidebarTabs[0] || mobileTabs[0];
  if (first) activateTab(first.dataset.tab);
}

/* ─── NEWS PAGE CALENDAR ─── */
function initNewsPageCalendar() {
  var calContainer  = document.getElementById('news-cal');
  var calSelectedEl = document.getElementById('news-cal-selected');
  if (!calContainer) return;

  // Days that have news (mock data — same visual as Next.js CalendarBlock)
  var NEWS_DAYS = [3, 7, 12, 18, 24, 28];

  var today      = new Date();
  var curYear    = today.getFullYear();
  var curMonth   = today.getMonth(); // 0-based
  var selectedDate = null; // Date object or null

  var RU_MONTHS = [
    'Январь','Февраль','Март','Апрель','Май','Июнь',
    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'
  ];
  var RU_WEEKDAYS = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];

  function formatDateRu(d) {
    return new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric', month: 'long', year: 'numeric'
    }).format(d);
  }

  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  // Returns 0=Mon … 6=Sun (Mon-first)
  function firstDayOfMonthMon(year, month) {
    var d = new Date(year, month, 1).getDay(); // 0=Sun
    return (d + 6) % 7;
  }

  function render() {
    var totalDays = getDaysInMonth(curYear, curMonth);
    var startOffset = firstDayOfMonthMon(curYear, curMonth);
    var prevMonthDays = getDaysInMonth(curYear, curMonth - 1);

    // Build year options (±5 years around today)
    var yearOpts = '';
    for (var y = today.getFullYear() - 5; y <= today.getFullYear() + 5; y++) {
      yearOpts += '<option value="' + y + '"' + (y === curYear ? ' selected' : '') + '>' + y + '</option>';
    }

    // Build weekday headers
    var weekdayHtml = RU_WEEKDAYS.map(function (wd) {
      return '<div class="news-cal__weekday">' + wd + '</div>';
    }).join('');

    // Build day cells
    var dayHtml = '';

    // Previous month's trailing days
    for (var i = 0; i < startOffset; i++) {
      var day = prevMonthDays - startOffset + 1 + i;
      dayHtml += '<button class="news-cal__day news-cal__day--other news-cal__day--no-news" disabled>' + day + '</button>';
    }

    // Current month days
    for (var d = 1; d <= totalDays; d++) {
      var hasNews = NEWS_DAYS.indexOf(d) !== -1;
      var isSelected = selectedDate &&
        selectedDate.getFullYear() === curYear &&
        selectedDate.getMonth() === curMonth &&
        selectedDate.getDate() === d;

      var cls = 'news-cal__day';
      if (hasNews) cls += ' news-cal__day--has-news';
      else         cls += ' news-cal__day--no-news';
      if (isSelected) cls += ' news-cal__day--selected';

      var dot = hasNews ? '<span class="news-cal__dot"></span>' : '';
      dayHtml += '<button class="' + cls + '" data-day="' + d + '">' + d + dot + '</button>';
    }

    // Next month's leading days to fill the grid
    var totalCells = startOffset + totalDays;
    var remaining = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (var n = 1; n <= remaining; n++) {
      dayHtml += '<button class="news-cal__day news-cal__day--other news-cal__day--no-news" disabled>' + n + '</button>';
    }

    calContainer.innerHTML =
      '<div class="news-cal__head">' +
        '<button class="news-cal__nav" id="news-cal-prev">&#8249;</button>' +
        '<div class="news-cal__head-center">' +
          '<span class="news-cal__month-name">' + RU_MONTHS[curMonth] + '</span>' +
          '<select class="news-cal__year-select" id="news-cal-year">' + yearOpts + '</select>' +
        '</div>' +
        '<button class="news-cal__nav" id="news-cal-next">&#8250;</button>' +
      '</div>' +
      '<div class="news-cal__grid">' +
        weekdayHtml +
        dayHtml +
      '</div>';

    // Update selected date display
    if (calSelectedEl) {
      if (selectedDate) {
        calSelectedEl.textContent = formatDateRu(selectedDate);
        calSelectedEl.style.display = '';
      } else {
        calSelectedEl.textContent = '';
        calSelectedEl.style.display = 'none';
      }
    }

    // Bind events after render
    var prevBtn = document.getElementById('news-cal-prev');
    var nextBtn = document.getElementById('news-cal-next');
    var yearSel = document.getElementById('news-cal-year');

    if (prevBtn) prevBtn.addEventListener('click', function () {
      curMonth--;
      if (curMonth < 0) { curMonth = 11; curYear--; }
      render();
    });
    if (nextBtn) nextBtn.addEventListener('click', function () {
      curMonth++;
      if (curMonth > 11) { curMonth = 0; curYear++; }
      render();
    });
    if (yearSel) yearSel.addEventListener('change', function () {
      curYear = parseInt(this.value, 10);
      render();
    });

    // Day click
    calContainer.querySelectorAll('.news-cal__day[data-day]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var day = parseInt(btn.dataset.day, 10);
        var clicked = new Date(curYear, curMonth, day);
        if (
          selectedDate &&
          selectedDate.getFullYear() === curYear &&
          selectedDate.getMonth() === curMonth &&
          selectedDate.getDate() === day
        ) {
          selectedDate = null; // deselect
        } else {
          selectedDate = clicked;
        }
        render();
      });
    });
  }

  // Hide selected date display initially
  if (calSelectedEl) calSelectedEl.style.display = 'none';

  render();
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
