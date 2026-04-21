/* ============================================================
   CMS THEME — КАЭС / main.js
   Vanilla JavaScript only — no frameworks, no build step
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  initHeaderMenu();
  initMegaMenu();
  initMobileMenu();
  initSearch();
  initHeroSlideshow();
  initNewsCarousel();
  initActivitiesCarousel();
  initEmissionCalculator();
  initMapTooltips();
  initProjectStagesTabs();
  initCountUpAnimations();
  initFooterForm();
});

/* ============================================================
   HEADER MENU — active link detection
   ============================================================ */
function initHeaderMenu() {
  var links = document.querySelectorAll(".nav-links a");
  var path = window.location.pathname.replace(/\/$/, "") || "/";
  links.forEach(function (link) {
    var href = (link.getAttribute("href") || "").replace(/\/$/, "") || "/";
    if (href === "/" && path === "/") {
      link.classList.add("is-active");
    } else if (href !== "/" && path.startsWith(href)) {
      link.classList.add("is-active");
    }
    // For local file: treat index.html as home
    if (href === "index.html" || href === "./index.html") {
      link.classList.add("is-active");
    }
  });
}

/* ============================================================
   MEGA MENU — burger drawer
   ============================================================ */
function initMegaMenu() {
  var burgerBtn = document.getElementById("nav-burger");
  var megaPanel = document.getElementById("mega-panel");
  var megaBackdrop = document.getElementById("mega-backdrop");
  var megaCloseBtn = document.getElementById("mega-close");

  if (!burgerBtn || !megaPanel) return;

  function openMega() {
    megaPanel.classList.add("is-open");
    if (megaBackdrop) megaBackdrop.classList.add("is-open");
    burgerBtn.classList.add("is-active");
    document.body.style.overflow = "hidden";
  }

  function closeMega() {
    megaPanel.classList.remove("is-open");
    if (megaBackdrop) megaBackdrop.classList.remove("is-open");
    burgerBtn.classList.remove("is-active");
    document.body.style.overflow = "";
  }

  burgerBtn.addEventListener("click", function () {
    megaPanel.classList.contains("is-open") ? closeMega() : openMega();
  });

  if (megaBackdrop) megaBackdrop.addEventListener("click", closeMega);
  if (megaCloseBtn) megaCloseBtn.addEventListener("click", closeMega);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMega();
  });
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  var mobileBtn = document.getElementById("mobile-burger");
  var mobileMenu = document.getElementById("mobile-menu");
  if (!mobileBtn || !mobileMenu) return;

  mobileBtn.addEventListener("click", function () {
    var isOpen = mobileMenu.classList.toggle("is-open");
    mobileBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close on link click
  var links = mobileMenu.querySelectorAll("a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("is-open");
    });
  });
}

/* ============================================================
   SEARCH
   ============================================================ */
function initSearch() {
  var searchWrap = document.querySelector(".search-wrap");
  if (!searchWrap) return;
  var inputWrap = searchWrap.querySelector(".search-input-wrap");
  var input = searchWrap.querySelector(".search-input");
  if (!inputWrap || !input) return;

  searchWrap.addEventListener("mouseenter", function () {
    inputWrap.classList.add("is-visible");
    input.focus();
  });
  searchWrap.addEventListener("mouseleave", function () {
    if (document.activeElement !== input) {
      inputWrap.classList.remove("is-visible");
    }
  });
  input.addEventListener("blur", function () {
    inputWrap.classList.remove("is-visible");
  });
}

/* ============================================================
   HERO SLIDESHOW
   ============================================================ */
function initHeroSlideshow() {
  var slides = document.querySelectorAll(".hero-slide");
  if (slides.length === 0) return;

  function setActive(index) {
    slides.forEach(function (slide, i) {
      if (i === index) {
        slide.classList.add("is-active");
        slide.setAttribute("aria-hidden", "false");
      } else {
        slide.classList.remove("is-active");
        slide.setAttribute("aria-hidden", "true");
      }
    });
  }

  slides.forEach(function (slide, i) {
    slide.addEventListener("click", function () {
      if (!slide.classList.contains("is-active")) {
        setActive(i);
      }
    });
  });
}

/* ============================================================
   NEWS CAROUSEL
   ============================================================ */
function initNewsCarousel() {
  var track = document.querySelector(".news-carousel-track");
  var cards = document.querySelectorAll(".news-card");
  var prevBtn = document.getElementById("news-prev");
  var nextBtn = document.getElementById("news-next");
  if (!track || cards.length === 0) return;

  var n = cards.length;
  var active = 0;
  var CARD_W = 520;
  var SIDE_W = 430;
  var X_STEP = 500;
  var SCALE = 0.82;

  function getPos(i) {
    var p = i - active;
    while (p > Math.floor(n / 2)) p -= n;
    while (p < -Math.floor(n / 2)) p += n;
    return p;
  }

  function render() {
    cards.forEach(function (card, i) {
      var pos = getPos(i);
      var isActive = pos === 0;
      var visible = Math.abs(pos) <= 1;
      var scale = isActive ? 1 : SCALE;
      var xOffset = pos * X_STEP;
      var opacity = visible ? 1 : 0;
      var zIndex = isActive ? 3 : visible ? 2 : 0;
      var width = isActive ? CARD_W : SIDE_W;

      card.style.width = width + "px";
      card.style.left = "50%";
      card.style.transform =
        "translateX(calc(-50% + " + xOffset + "px)) scale(" + scale + ")";
      card.style.transformOrigin = "bottom center";
      card.style.opacity = opacity;
      card.style.zIndex = zIndex;
      card.style.cursor = isActive ? "default" : "pointer";

      if (isActive) {
        card.classList.add("is-active");
      } else {
        card.classList.remove("is-active");
      }
    });
  }

  function navigate(dir) {
    active = (active + dir + n) % n;
    render();
  }

  cards.forEach(function (card, i) {
    card.addEventListener("click", function () {
      var pos = getPos(i);
      if (pos !== 0) {
        navigate(pos > 0 ? 1 : -1);
      }
    });
  });

  if (prevBtn) prevBtn.addEventListener("click", function () { navigate(-1); });
  if (nextBtn) nextBtn.addEventListener("click", function () { navigate(1); });

  render();
}

/* ============================================================
   ACTIVITIES CAROUSEL
   ============================================================ */
function initActivitiesCarousel() {
  var container = document.querySelector(".activities-carousel");
  var track = document.querySelector(".activities-track");
  var prevBtn = document.getElementById("activities-prev");
  var nextBtn = document.getElementById("activities-next");
  if (!container || !track) return;

  var cards = track.querySelectorAll(".activity-card");
  var n = cards.length;
  var VISIBLE = 3;
  var GAP = 30;
  var current = 0;
  var maxIndex = n - VISIBLE;

  function getCardWidth() {
    var w = container.getBoundingClientRect().width;
    return (w - (VISIBLE - 1) * GAP) / VISIBLE;
  }

  function render() {
    var cardW = getCardWidth();
    var step = cardW + GAP;

    cards.forEach(function (card) {
      card.style.width = cardW + "px";
    });
    track.style.transform = "translateX(-" + (current * step) + "px)";

    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current >= maxIndex;
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      current = Math.max(0, current - 1);
      render();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      current = Math.min(maxIndex, current + 1);
      render();
    });
  }

  render();
  window.addEventListener("resize", render);
}

/* ============================================================
   EMISSIONS CALCULATOR
   ============================================================ */
function initEmissionCalculator() {
  var SOURCES = [
    { id: "coal",    label: "Уголь",            factor: 820 },
    { id: "gas",     label: "Газ",              factor: 490 },
    { id: "nuclear", label: "Атомная энергия",  factor: 12  },
    { id: "solar",   label: "Солнечная энергия",factor: 40  },
    { id: "wind",    label: "Ветровая энергия", factor: 8   },
  ];
  var CAR_TONS = 4.5;
  var selectedSource = "coal";
  var volumeVal = 1000;

  var sourceBtns = document.querySelectorAll(".source-btn");
  var volumeInput = document.getElementById("calc-volume");
  var quickBtns = document.querySelectorAll(".quick-vol-btn");
  var errorBox = document.querySelector(".calc-error");
  var resultValue = document.getElementById("calc-result-value");
  var resultSub = document.getElementById("calc-result-sub");
  var insightText = document.getElementById("calc-insight-text");
  var statRatio = document.getElementById("stat-ratio");
  var statDiff = document.getElementById("stat-diff");
  var statCars = document.getElementById("stat-cars");

  if (!volumeInput) return;

  function fmt(n, dec) {
    dec = dec !== undefined ? dec : 0;
    return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: dec }).format(n);
  }

  function calculate() {
    var src = SOURCES.find(function (s) { return s.id === selectedSource; }) || SOURCES[0];
    var isValid = volumeVal > 0 && isFinite(volumeVal);

    if (errorBox) {
      errorBox.classList.toggle("is-visible", !isValid);
    }
    if (!isValid) return;

    var emissionsKg = volumeVal * src.factor;
    var emissionsTons = emissionsKg / 1000;
    var carsEq = emissionsTons / CAR_TONS;

    var nuclearTons = (volumeVal * 12) / 1000;
    var coalTons    = (volumeVal * 820) / 1000;
    var gasTons     = (volumeVal * 490) / 1000;
    var ratio = nuclearTons > 0 ? emissionsTons / nuclearTons : 0;
    var diff = selectedSource === "nuclear" ? 0 : emissionsTons - nuclearTons;

    if (resultValue) resultValue.textContent = fmt(emissionsTons) + " т";
    if (resultSub) {
      resultSub.textContent = src.label + " · " + fmt(volumeVal) + " МВт·ч";
    }
    if (statRatio) {
      statRatio.textContent = selectedSource === "nuclear" ? "1×" : fmt(ratio, 1) + "×";
    }
    if (statDiff) {
      statDiff.textContent = selectedSource === "nuclear" ? "—" : fmt(diff) + " т";
    }
    if (statCars) {
      statCars.textContent = "≈ " + fmt(carsEq);
    }

    // insight text
    if (insightText) {
      var text;
      if (selectedSource === "nuclear") {
        var savedVsCoal = coalTons - emissionsTons;
        var pct = coalTons > 0 ? (savedVsCoal / coalTons) * 100 : 0;
        text = "При выработке " + fmt(volumeVal) + " МВт·ч атомная энергия формирует около " +
          fmt(emissionsTons) + " т CO₂. Для сравнения: уголь при таком же объеме дал бы " +
          fmt(coalTons) + " т, а газ — " + fmt(gasTons) + " т. Это значит, что по сравнению с углем выбросы ниже примерно на " +
          fmt(savedVsCoal) + " т, или на " + fmt(pct, 1) + "%.";
      } else {
        var saved = emissionsTons - nuclearTons;
        var redPct = emissionsTons > 0 ? (saved / emissionsTons) * 100 : 0;
        text = "При выработке " + fmt(volumeVal) + " МВт·ч " + src.label.toLowerCase() +
          " формирует около " + fmt(emissionsTons) + " т CO₂. Если тот же объем произвести на атомной станции, выбросы составят примерно " +
          fmt(nuclearTons) + " т. Это на " + fmt(saved) + " т меньше, то есть выбросы можно сократить примерно на " +
          fmt(redPct, 1) + "%.";
      }
      insightText.textContent = text;
    }
  }

  // Source buttons
  sourceBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      selectedSource = btn.dataset.source;
      sourceBtns.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      calculate();
    });
  });

  // Volume input
  volumeInput.addEventListener("input", function () {
    volumeVal = parseFloat(volumeInput.value) || 0;
    calculate();
  });

  // Quick volume buttons
  quickBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var v = btn.dataset.volume;
      volumeInput.value = v;
      volumeVal = parseFloat(v);
      calculate();
    });
  });

  calculate();
}

/* ============================================================
   MAP TOOLTIPS / CITY CARDS
   ============================================================ */
function initMapTooltips() {
  var markers = document.querySelectorAll(".map-marker");
  var popups = document.querySelectorAll(".map-popup");
  var hintEl = document.querySelector(".map-hint");
  var backdrop = document.querySelector(".map-backdrop");
  var activeId = null;

  function openCity(id) {
    activeId = id;
    markers.forEach(function (m) {
      m.classList.toggle("is-active", m.dataset.city === id);
    });
    popups.forEach(function (p) {
      p.classList.toggle("is-visible", p.dataset.city === id);
    });
    if (backdrop) backdrop.classList.add("is-visible");
    if (hintEl) hintEl.textContent = "Нажмите в любое место, чтобы закрыть";
  }

  function closeCity() {
    activeId = null;
    markers.forEach(function (m) { m.classList.remove("is-active"); });
    popups.forEach(function (p) { p.classList.remove("is-visible"); });
    if (backdrop) backdrop.classList.remove("is-visible");
    if (hintEl) hintEl.textContent = "Нажмите на метку";
  }

  markers.forEach(function (marker) {
    marker.addEventListener("click", function (e) {
      e.stopPropagation();
      var id = marker.dataset.city;
      activeId === id ? closeCity() : openCity(id);
    });
  });

  if (backdrop) backdrop.addEventListener("click", closeCity);

  // Close buttons inside popups
  var closeBtns = document.querySelectorAll(".map-popup-close");
  closeBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      closeCity();
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeCity();
  });
}

/* ============================================================
   PROJECT STAGES TABS
   ============================================================ */
function initProjectStagesTabs() {
  var tabs = document.querySelectorAll(".stages-tab");
  var panels = document.querySelectorAll(".stages-panel");
  if (tabs.length === 0) return;

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.dataset.tab;
      tabs.forEach(function (t) { t.classList.remove("is-active"); });
      panels.forEach(function (p) { p.classList.remove("is-active"); });
      tab.classList.add("is-active");
      var panel = document.getElementById("stages-panel-" + target);
      if (panel) panel.classList.add("is-active");
    });
  });
}

/* ============================================================
   COUNT-UP ANIMATIONS (Achievements section)
   ============================================================ */
function initCountUpAnimations() {
  var cards = document.querySelectorAll(".achievement-value[data-target]");
  if (cards.length === 0) return;

  var section = document.querySelector(".achievements-section");
  if (!section) return;

  var triggered = false;

  function runCountUp(el) {
    var target = parseInt(el.dataset.target, 10);
    var duration = 1400;
    var startTime = null;

    function tick(now) {
      if (!startTime) startTime = now;
      var elapsed = now - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(eased * target);
      el.textContent = current.toLocaleString("ru-RU");
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !triggered) {
        triggered = true;
        cards.forEach(runCountUp);
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });

  observer.observe(section);
}

/* ============================================================
   FOOTER FORM
   ============================================================ */
function initFooterForm() {
  var form = document.getElementById("footer-form");
  var success = document.getElementById("footer-success");
  var resetBtn = document.getElementById("footer-reset");
  if (!form || !success) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.style.display = "none";
    success.classList.add("is-visible");
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      form.reset();
      form.style.display = "";
      success.classList.remove("is-visible");
    });
  }
}
