# ТОО «КАЭС» — CMS-Compatible Website

## Что это

Это статическая HTML/CSS/JS версия корпоративного сайта **ТОО «Казахстанские атомные электрические станции»**, подготовленная для интеграции в CMS-платформу (WordPress или аналог).

Исходный фронтенд на React/Next.js находится в соседней папке `web/` и **не изменялся**. Вся работа выполнялась только в папке `web-cms/`.

---

## Структура проекта

```
web-cms/
├── README.md                        ← этот файл
├── index.html                       ← Главная страница
├── about.html                       ← О компании (вкладки)
├── atom.html                        ← Об атоме (вкладки)
├── contacts.html                    ← Контакты + карта
├── development-plan.html            ← План развития
├── faq.html                         ← Часто задаваемые вопросы
├── international-cooperation.html   ← Международное сотрудничество
├── news.html                        ← Список новостей
├── news-detail.html                 ← Шаблон страницы новости
├── president-message.html           ← Послание президента
├── procurements.html                ← Закупки
├── projects.html                    ← Проекты (Балхаш / Майнкум)
├── vacancies.html                   ← Список вакансий
├── vacancy-category.html            ← Вакансии по категории
├── vacancy-detail.html              ← Страница конкретной вакансии
└── assets/
    ├── css/
    │   ├── main.css                 ← Полная дизайн-система (CSS variables, все компоненты)
    │   └── responsive.css           ← Адаптивность (mobile / tablet breakpoints)
    ├── js/
    │   └── main.js                  ← Весь интерактив на vanilla JS
    ├── images/                      ← Изображения (скопированы из web/public/)
    ├── icons/                       ← SVG-иконки
    ├── fonts/                       ← TT Firs Neue (локальные @font-face)
    └── docs/                        ← PDF/DOCX документы для скачивания
```

---

## Как открыть локально

### Вариант 1 — прямо в браузере
Откройте файл `web-cms/index.html` в браузере. Большинство страниц работает без сервера.

> ⚠️ Некоторые браузеры блокируют загрузку локальных шрифтов без HTTP-сервера. В этом случае используйте вариант 2.

### Вариант 2 — простой локальный сервер

```bash
# Python (встроен в macOS / Linux)
cd web-cms
python3 -m http.server 8080
# Открыть: http://localhost:8080

# Node.js (если установлен)
npx serve web-cms
```

---

## Созданные страницы

| Файл | Описание | Особенности |
|------|----------|-------------|
| `index.html` | Главная | Slideshow, 8 секций, карточки партнёров |
| `about.html` | О компании | 6 вкладок: о нас / руководство / управление / соответствие / документы / безопасность |
| `atom.html` | Об атоме | 6 вкладок: история / эксплуатация / типы / безопасность / экология / мифы |
| `contacts.html` | Контакты | Карточки контактов, Yandex-карта, форма обратной связи |
| `development-plan.html` | План развития | Этапы строительства, ссылка на DOCX |
| `faq.html` | FAQ | 3 раздела, accordion (39 вопросов) |
| `international-cooperation.html` | Сотрудничество | Организации, партнёры, события |
| `news.html` | Новости | Фильтр по категориям, сетка карточек |
| `news-detail.html` | Детальная новость | Шаблон для CMS |
| `president-message.html` | Послание президента | Цитата, фото, факты |
| `procurements.html` | Закупки | 4 вкладки: политика / объявления / локализация / документы |
| `projects.html` | Проекты | Балхаш АЭС и Майнкум АСМР со стадиями |
| `vacancies.html` | Вакансии | 9 категорий в сетке |
| `vacancy-category.html` | Категория вакансий | Динамически по `?category=` |
| `vacancy-detail.html` | Конкретная вакансия | Динамически по `?slug=`, 10 готовых вакансий |

---

## Технологии

- **HTML5** — семантическая разметка
- **CSS3** — CSS custom properties, Flexbox, Grid
- **Vanilla JavaScript** — без фреймворков, без сборки
- **Шрифт** — TT Firs Neue (локально через `@font-face`)
- **Нет** React, Next.js, TypeScript, Tailwind runtime, npm build

---

## Дизайн-система (CSS Variables)

Все цвета, отступы и радиусы управляются через переменные в `main.css`:

```css
:root {
  --color-primary:      #112250;   /* тёмно-синий */
  --color-secondary:    #3C507D;   /* средний синий */
  --color-accent:       #E0C58F;   /* золото */
  --color-accent-hover: #C9B07A;
  --color-surface:      #F5F0E9;   /* кремовый фон */
  --color-muted:        #D9CBC2;
  --color-text-dark:    #2C2C3A;
  --color-text-light:   #F5F0E9;
  --container-width:    1280px;
  --radius-lg:          24px;
  --radius-md:          16px;
  --shadow-soft:        0 10px 30px rgba(0,0,0,0.08);
}
```

---

## CMS Placeholders

В HTML-файлах расставлены комментарии для будущей CMS-интеграции:

```html
<!-- CMS: site header -->
<!-- CMS: footer -->
<!-- CMS: page title -->
<!-- CMS: page content -->
<!-- CMS: hero slides -->
<!-- CMS LOOP: news items start -->
<!-- CMS LOOP: news items end -->
<!-- CMS LOOP: vacancies start -->
<!-- CMS LOOP: vacancies end -->
<!-- CMS: contact info -->
```

Эти места помечены для замены серверным рендером при переносе в WordPress или любую другую CMS.

---

## Интерактив (main.js)

Файл `assets/js/main.js` реализует:

- Мобильное меню (бургер)
- Мега-меню (hover desktop)
- Slideshow на главной (автопрокрутка, точки)
- Карусели новостей / партнёров
- Вкладки (about, atom, procurements, projects)
- FAQ аккордеон
- Навигация по вакансиям через `?category=` и `?slug=`
- Фильтр новостей по категориям
- Форма обратной связи (валидация)
- Интерактивная карта регионов Казахстана

---

## Исходный React/Next.js проект

Находится в `../web/` — не изменялся, является источником истины по дизайну и контенту. При расхождениях между `web/` и `web-cms/` — `web/` приоритетен.

---

## Подготовка к WordPress

При переносе в WordPress:

1. Шапку и подвал вынести в `header.php` / `footer.php`
2. Каждую HTML-страницу превратить в шаблон страницы (`page-*.php`)
3. CMS-комментарии заменить на WordPress template tags (`<?php the_title(); ?>` и т.д.)
4. Циклы новостей/вакансий подключить через `WP_Query`
5. Стили и JS подключить через `wp_enqueue_style` / `wp_enqueue_script`
6. Assets перенести в папку темы

---

*Версия: 1.0 | Создано на основе web/ (Next.js/React)*
