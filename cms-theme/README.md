# CMS Theme — КАЭС

CMS-compatible версия главной страницы сайта ТОО «Казахстанские атомные электрические станции».
Реализована на чистом HTML + CSS + vanilla JavaScript без сборки и фреймворков.

---

## Как открыть

Просто откройте файл `index.html` в браузере двойным кликом — сервер не нужен.

```
cms-theme/index.html
```

---

## Структура файлов

```
cms-theme/
  index.html          — главная страница
  README.md           — этот файл
  assets/
    css/
      main.css        — все стили (CSS variables, компоненты, адаптивность)
    js/
      main.js         — весь JavaScript (меню, карусели, калькулятор, карта)
    images/           — изображения (скопируйте из apps/web/public/images/)
      activities/     — иконки видов деятельности
    fonts/
      tt_firs_neue/   — шрифт TT Firs Neue (Light, Medium, Bold, ExtraLight)
    docs/
      kaes-development-plan.docx  — документ «План развития»
    icons/            — зарезервировано для иконок
```

---

## Стили

Файл: `assets/css/main.css`

- Шрифты подключены через `@font-face` из `assets/fonts/tt_firs_neue/`
- CSS-переменные в `:root` (цвета, отступы, высота навигации)
- Без Tailwind, без PostCSS, без npm

## JavaScript

Файл: `assets/js/main.js`

Функции, инициализируемые через `DOMContentLoaded`:

| Функция | Что делает |
|---|---|
| `initHeaderMenu()` | Подсветка активной ссылки в навбаре |
| `initMegaMenu()` | Открытие/закрытие mega menu (бургер) |
| `initMobileMenu()` | Мобильное выпадающее меню |
| `initSearch()` | Анимация поля поиска |
| `initHeroSlideshow()` | Переключение слайдов Hero |
| `initNewsCarousel()` | Карусель новостей (центральная карточка) |
| `initActivitiesCarousel()` | Карусель видов деятельности |
| `initEmissionCalculator()` | Калькулятор CO₂ |
| `initMapTooltips()` | Интерактивные маркеры на карте Казахстана |
| `initProjectStagesTabs()` | Вкладки Балхаш/Майнкум |
| `initCountUpAnimations()` | Счётчики достижений при прокрутке |
| `initFooterForm()` | Форма обратной связи в футере |

---

## Изображения и шрифты

- **Изображения** (`assets/images/`): скопируйте из `apps/web/public/images/`
- **Шрифты** (`assets/fonts/tt_firs_neue/`): уже скопированы из `apps/web/public/fonts/`
- **Документ** (`assets/docs/kaes-development-plan.docx`): уже скопирован

---

## CMS Placeholders

В `index.html` расставлены HTML-комментарии для интеграции с CMS:

| Комментарий | Место |
|---|---|
| `<!-- CMS: site header -->` | Шапка сайта |
| `<!-- CMS: hero slides -->` | Блок слайдера |
| `<!-- CMS: homepage about content -->` | Секция «О компании» |
| `<!-- CMS LOOP: featured news start/end -->` | Цикл карточек новостей |
| `<!-- CMS LOOP: activities start/end -->` | Цикл карточек деятельности |
| `<!-- CMS: mission content -->` | Секция миссии |
| `<!-- CMS: achievements -->` | Секция достижений |
| `<!-- CMS: map project points -->` | Маркеры на карте |
| `<!-- CMS: development plan -->` | Секция плана развития |
| `<!-- CMS: project stages -->` | Этапы строительства |
| `<!-- CMS: emissions calculator static block -->` | Калькулятор CO₂ |
| `<!-- CMS: careers promo -->` | Блок вакансий |
| `<!-- CMS: site footer -->` | Подвал сайта |

---

## Статус

Пока перенесена **только главная страница** (`index.html`).

Остальные страницы (`about.html`, `news.html`, `atom.html`, `procurements.html`,
`vacancies.html`, `faq.html`, `contacts.html`) — в разработке.
Ссылки на них уже прописаны в навигации для будущего использования.
