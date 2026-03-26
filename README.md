# KNPP Corporate Portal

## Что это за проект

Это корпоративный сайт компании с CMS, где есть как имиджевые и информационные страницы, так и новостной блок, вакансии и другие публичные разделы.
Проект разрабатывается как современная версия корпоративного сайта с:

* информационными страницами о компании;
* блоком новостей;
* разделом вакансий;
* возможностью дальнейшего расширения.

### Figma
[NOT FINAL DESIGN "Page 2"](https://www.figma.com/design/KDSsUyBZOITbMw3tfqNjjp/%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0?node-id=87-2&t=1AkU6uV3gxx3f9d2-1)

## Технологии

* **Frontend:** Next.js
* **Backend:** Django + Django REST Framework
* **Database:** PostgreSQL
* **Cache / tasks:** Redis
* **Media storage:** S3 / MinIO
* **Deployment:** Docker + Nginx

## Архитектура

Используется **headless architecture**:

* **Django** отвечает за admin panel, API, CMS и бизнес-логику;
* **Next.js** отвечает за публичный интерфейс, производительность и SEO.

## Основные backend-модули на первом этапе

* `pages` — корпоративные страницы и разделы сайта;
* `news` — новости, пресс-релизы, события;
* `vacancies` — вакансии;
* `media_library` — изображения и файлы;
* `core` — общие настройки и базовые endpoints.

## Что будет на сайте

* Главная
* О компании
* Новости
* Закупки
* Вакансии
* Контакты
* Внутренние подразделы раздела «О компании»

## Текущий фокус разработки

Сейчас проект находится на этапе подготовки базовой архитектуры и backend-структуры.

Ближайшие задачи:

* завершить модуль `pages`;
* сделать модуль `news`;
* сделать модуль `vacancies`;
* подготовить API для frontend.

## Цель

Сделать понятный, современный и масштабируемый корпоративный портал, который будет удобен:

* пользователям сайта;
* редакторам контента;
* команде разработки.


## Локальный запуск

### Backend

Перейти в папку backend:

```bash
cd apps/api
```

Запустить Django server:
```bash
python manage.py runserver
```
Backend будет доступен по адресу:
```bash
http://127.0.0.1:8000/
```

(Дополнительно) Применить миграции:

```bash
python manage.py makemigrations smtg
python manage.py migrate
```

### Frontend

Перейти в папку frontend:

```bash
cd apps/web
```
Запустить Next.js:
```bash
npm run dev
```
Frontend будет доступен по адресу:
```bash
http://localhost:3000/
```

### Полезные ссылки
Django Admin:
```bash
http://127.0.0.1:8000/admin/
```

superuser: admin 
password: admin

Swagger docs: 
```bash
http://127.0.0.1:8000/api/docs/
```

API health check: 
```bash
http://127.0.0.1:8000/api/v1/health/
```