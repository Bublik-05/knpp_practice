(function () {
  "use strict";

  var API_BASE_URL = window.NEWS_API_BASE_URL || "";

  var fallbackNews = [
    {
      id: 1,
      slug: "koordinacionnye-vstrechi-s-magate",
      category: "Новости",
      title: "Координационные встречи с МАГАТЭ в рамках подготовки к миссии INIR",
      date: "09.02.2026",
      image: "assets/images/news11.png",
      summary: "Краткое описание новости для детальной страницы.",
      content: "Полный текст публикации пока недоступен."
    },
    {
      id: 2,
      slug: "razvitie-yadernoj-energetiki",
      category: "Новости",
      title: "Развитие ядерной энергетики в Казахстане: итоги года",
      date: "15.01.2026",
      image: "assets/images/news12.png",
      summary: "Краткое описание новости для детальной страницы.",
      content: "Полный текст публикации пока недоступен."
    },
    {
      id: 3,
      slug: "podpisanie-memoranduma",
      category: "Новости",
      title: "Подписание меморандума о сотрудничестве с международными партнёрами",
      date: "22.12.2025",
      image: "assets/images/news13.png",
      summary: "Краткое описание новости для детальной страницы.",
      content: "Полный текст публикации пока недоступен."
    },
    {
      id: 4,
      slug: "mezhdunarodnaya-konferenciya",
      category: "События",
      title: "Международная конференция по ядерной безопасности в Алматы",
      date: "05.11.2025",
      image: "assets/images/news14.png",
      summary: "Краткое описание события для детальной страницы.",
      content: "Полный текст публикации пока недоступен."
    },
    {
      id: 5,
      slug: "vizit-delegacii-magate",
      category: "События",
      title: "Визит делегации МАГАТЭ на производственные объекты КАЭС",
      date: "18.10.2025",
      image: "assets/images/news15.png",
      summary: "Краткое описание события для детальной страницы.",
      content: "Полный текст публикации пока недоступен."
    },
    {
      id: 6,
      slug: "forum-energetikov",
      category: "События",
      title: "Форум энергетиков Центральной Азии — 2025",
      date: "01.09.2025",
      image: "assets/images/news1-img.jpg",
      summary: "Краткое описание события для детальной страницы.",
      content: "Полный текст публикации пока недоступен."
    },
    {
      id: 7,
      slug: "zayavlenie-o-nachale-proektirovaniya",
      category: "Пресс-релизы",
      title: "Официальное заявление о начале второго этапа проектирования АЭС",
      date: "15.08.2025",
      image: "assets/images/news2-img.jpg",
      summary: "Краткое описание пресс-релиза для детальной страницы.",
      content: "Полный текст публикации пока недоступен."
    },
    {
      id: 8,
      slug: "otchet-ekologicheskoy-bezopasnosti",
      category: "Пресс-релизы",
      title: "КАЭС публикует отчёт об экологической безопасности за первое полугодие",
      date: "30.07.2025",
      image: "assets/images/news3-img.jpg",
      summary: "Краткое описание пресс-релиза для детальной страницы.",
      content: "Полный текст публикации пока недоступен."
    },
    {
      id: 9,
      slug: "kommentariy-peregovory-edf",
      category: "Пресс-релизы",
      title: "Комментарий пресс-службы по результатам переговоров с EDF",
      date: "14.07.2025",
      image: "assets/images/news4-img.jpg",
      summary: "Краткое описание пресс-релиза для детальной страницы.",
      content: "Полный текст публикации пока недоступен."
    }
  ];

  function qs(selector) {
    return document.querySelector(selector);
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function shortTitle(title) {
    return title && title.length > 50 ? title.slice(0, 50) + "…" : title;
  }

  function normalizeImageUrl(url) {
    if (!url) return "assets/images/news1-img.jpg";
    if (url.indexOf("http://") === 0 || url.indexOf("https://") === 0) return url;
    if (url.indexOf("/images/") === 0) return "assets" + url;
    if (url.indexOf("images/") === 0) return "assets/" + url;
    if (url.indexOf("/media/") === 0 && API_BASE_URL) return API_BASE_URL + url;
    return url;
  }

  function categoryClass(category) {
    if (category === "Новости") return "news-detail-category--news";
    if (category === "События") return "news-detail-category--events";
    return "news-detail-category--press";
  }

  function renderEditorBlock(block) {
    if (!block || !block.type) return "";

    var type = String(block.type).toLowerCase();
    var data = block.data || {};

    if (type === "header") {
      var level = Math.min(Math.max(Number(data.level) || 2, 1), 6);
      return "<h" + level + ">" + (data.text || "") + "</h" + level + ">";
    }

    if (type === "paragraph") {
      return "<p>" + (data.text || "") + "</p>";
    }

    if (type === "list") {
      var style = data.style === "ordered" ? "ol" : "ul";
      var items = Array.isArray(data.items) ? data.items : [];
      return "<" + style + ">" + items.map(function (item) {
        return "<li>" + item + "</li>";
      }).join("") + "</" + style + ">";
    }

    if (type === "image") {
      var rawUrl = data.file && data.file.url ? data.file.url : "";
      var imageUrl = normalizeImageUrl(rawUrl);
      var caption = data.caption || "";
      if (!imageUrl) return "<p class=\"news-detail-empty\">Image not available</p>";
      return "<figure>" +
        "<img class=\"editor-image\" src=\"" + escapeHtml(imageUrl) + "\" alt=\"" + escapeHtml(caption || "Image") + "\" loading=\"lazy\" />" +
        (caption ? "<figcaption>" + caption + "</figcaption>" : "") +
        "</figure>";
    }

    if (type === "table") {
      var rows = Array.isArray(data.content) ? data.content : [];
      return "<table><tbody>" + rows.map(function (row) {
        return "<tr>" + row.map(function (cell) {
          return "<td>" + cell + "</td>";
        }).join("") + "</tr>";
      }).join("") + "</tbody></table>";
    }

    if (type === "quote") {
      return "<blockquote><p>" + (data.text || "") + "</p>" +
        (data.caption ? "<footer>— " + data.caption + "</footer>" : "") +
        "</blockquote>";
    }

    return "";
  }

  function renderContent(content, summary) {
    var html = "";

    if (summary) {
      html += "<p>" + escapeHtml(summary) + "</p>";
    }

    if (!content) {
      html += "<p>Полный текст публикации пока недоступен.</p>";
      return html;
    }

    if (typeof content === "string") {
      html += "<p>" + escapeHtml(content) + "</p>";
      return html;
    }

    if (content && Array.isArray(content.blocks)) {
      html += content.blocks.map(renderEditorBlock).join("");
      return html;
    }

    html += "<p>Полный текст публикации пока недоступен.</p>";
    return html;
  }

  function mapApiItem(item) {
    return {
      id: item.id,
      slug: item.slug,
      category: item.category || "Новости",
      title: item.title || "Публикация",
      date: item.published_date || "Без даты",
      image: normalizeImageUrl(item.cover_image || "/images/news1-img.jpg"),
      summary: item.summary || "",
      content: item.content || item.body || "Полный текст публикации пока недоступен."
    };
  }

  function getSlugFromUrl() {
    var params = new URLSearchParams(window.location.search);
    return params.get("slug") || params.get("id") || "koordinacionnye-vstrechi-s-magate";
  }

  function getFallbackBySlug(slug) {
    return fallbackNews.find(function (item) { return item.slug === slug; }) || fallbackNews[0];
  }

  function renderNews(item) {
    var category = qs("[data-news-category]");
    var title = qs("[data-news-title]");
    var date = qs("[data-news-date]");
    var image = qs("[data-news-image]");
    var content = qs("[data-news-content]");
    var crumb = qs("[data-news-breadcrumb-title]");

    document.title = item.title + " — ТОО «КАЭС»";

    if (category) {
      category.textContent = item.category;
      category.className = "news-detail-category " + categoryClass(item.category);
    }

    if (title) title.textContent = item.title;
    if (date) date.textContent = item.date;
    if (crumb) crumb.textContent = shortTitle(item.title);

    if (image) {
      image.src = normalizeImageUrl(item.image);
      image.alt = item.title;
    }

    if (content) {
      content.innerHTML = renderContent(item.content, item.summary);
    }
  }

  function fetchNewsBySlug(slug) {
    if (!API_BASE_URL) {
      return Promise.resolve(getFallbackBySlug(slug));
    }

    return fetch(API_BASE_URL + "/api/v1/news/" + encodeURIComponent(slug) + "/", {
      cache: "no-store"
    })
      .then(function (response) {
        if (!response.ok) throw new Error("News API returned " + response.status);
        return response.json();
      })
      .then(mapApiItem)
      .catch(function () {
        return getFallbackBySlug(slug);
      });
  }

  function initNewsDetail() {
    var slug = getSlugFromUrl();
    fetchNewsBySlug(slug).then(renderNews);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNewsDetail);
  } else {
    initNewsDetail();
  }
})();
