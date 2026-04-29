(function () {
  "use strict";

  var sections = [
    "history",
    "operation",
    "types",
    "safety",
    "environment",
    "myths",
    "multimedia",
    "quiz"
  ];

  var labels = {
    history: "История об атомной энергии",
    operation: "Как работает атомный реактор",
    types: "Типы реакторов",
    safety: "Безопасность",
    environment: "Атомная энергия и экология",
    myths: "Мифы и факты об АЭС",
    multimedia: "Мультимедиа",
    quiz: "Проверьте свои знания"
  };

  function showSection(id, shouldScroll) {
    if (sections.indexOf(id) === -1) {
      id = "history";
    }

    sections.forEach(function (sectionId) {
      var section = document.getElementById("atom-section-" + sectionId);
      var button = document.querySelector(
        '#atom-nav [data-section="' + sectionId + '"]'
      );

      if (sectionId === id) {
        if (section) {
          section.hidden = false;
          section.style.display = "";
        }

        if (button) {
          button.classList.add("active");
          button.setAttribute("aria-current", "true");
        }
      } else {
        if (section) {
          section.hidden = true;
          section.style.display = "none";
        }

        if (button) {
          button.classList.remove("active");
          button.removeAttribute("aria-current");
        }
      }
    });

    var breadcrumb = document.getElementById("atom-breadcrumb-label");
    if (breadcrumb) {
      breadcrumb.textContent = labels[id] || id;
    }

    if (shouldScroll) {
      var content = document.getElementById("atom-content-area");
      if (content) {
        window.scrollTo({
          top: content.getBoundingClientRect().top + window.scrollY - 120,
          behavior: "smooth"
        });
      }
    }
  }

  function initSectionNavigation() {
    var nav = document.getElementById("atom-nav");
    if (!nav) return;

    var buttons = nav.querySelectorAll("[data-section]");

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var id = button.getAttribute("data-section");

        if (!id) return;

        var url = new URL(window.location.href);
        url.searchParams.set("section", id);
        window.history.pushState({ section: id }, "", url.toString());

        showSection(id, true);
      });
    });

    window.addEventListener("popstate", function () {
      var params = new URLSearchParams(window.location.search);
      showSection(params.get("section") || "history", false);
    });

    var params = new URLSearchParams(window.location.search);
    showSection(params.get("section") || "history", false);
  }

  function initReactorTabs() {
    var tabs = document.querySelectorAll("[data-reactor-tab]");
    var panels = document.querySelectorAll("[data-reactor-panel]");

    if (!tabs.length || !panels.length) return;

    function activateReactor(id) {
      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute("data-reactor-tab") === id;
        tab.classList.toggle("active", isActive);
        tab.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      panels.forEach(function (panel) {
        var isActive = panel.getAttribute("data-reactor-panel") === id;
        panel.classList.toggle("active", isActive);
        panel.hidden = !isActive;
        panel.style.display = isActive ? "" : "none";
      });
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var id = tab.getAttribute("data-reactor-tab");
        if (id) activateReactor(id);
      });
    });

    activateReactor("vver");
  }

  function initQuiz() {
    var quiz = document.querySelector("[data-atom-quiz]");
    if (!quiz) return;

    var questions = quiz.querySelectorAll("[data-quiz-question]");
    var result = quiz.querySelector("[data-quiz-result]");
    var resetButton = quiz.querySelector("[data-quiz-reset]");

    function updateResult() {
      var answered = 0;
      var correct = 0;

      questions.forEach(function (question) {
        var selected = question.querySelector("input[type='radio']:checked");
        if (!selected) return;

        answered += 1;

        if (selected.getAttribute("data-correct") === "true") {
          correct += 1;
        }
      });

      if (result) {
        result.textContent =
          "Ответов: " + answered + " из " + questions.length + ". Правильно: " + correct + ".";
      }
    }

    quiz.addEventListener("change", updateResult);

    if (resetButton) {
      resetButton.addEventListener("click", function () {
        quiz.querySelectorAll("input[type='radio']").forEach(function (input) {
          input.checked = false;
        });

        if (result) {
          result.textContent = "Выберите ответы, чтобы увидеть результат.";
        }
      });
    }

    updateResult();
  }

  function initAtomPage() {
    initSectionNavigation();
    initReactorTabs();
    initQuiz();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAtomPage);
  } else {
    initAtomPage();
  }
})();