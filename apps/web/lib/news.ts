export type NewsCategory = "Новости" | "События" | "Пресс-релизы";

export interface NewsItem {
  content: string;
  id: number;
  slug: string;
  category: NewsCategory;
  title: string;
  date: string;
  image: string;
  summary?: string;
}

interface ApiNewsItem {
  id: number;
  slug: string;
  title: string;
  summary: string;
  content: any; // JSON structure from API
  body: any;
  cover_image: string | null;
  category: NewsCategory;
  published_date: string | null;
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

async function fetchNews(path: string): Promise<ApiNewsItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.warn(`News API returned ${response.status} for ${path}`);
      return [];
    }

    return response.json();
  } catch (err) {
    console.warn(`News API unavailable (${path}):`, err);
    return [];
  }
}

function mapNewsItem(item: ApiNewsItem): NewsItem {
  return {
    id: item.id,
    slug: item.slug,
    category: item.category,
    title: item.title,
    date: item.published_date ?? "Без даты",
    image: item.cover_image ?? "/images/news1-img.jpg",
    summary: item.summary,
    content: item.content ?? "Полный текст публикации пока недоступен.",
    body: item.body ?? "Полный текст публикации пока недоступен.",
  };
}

const FALLBACK_NEWS: NewsItem[] = [
  {
    id: 1,
    slug: "koordinacionnye-vstrechi-s-magate",
    category: "Новости",
    title: "Координационные встречи с МАГАТЭ в рамках подготовки к миссии INIR",
    date: "09.02.2026",
    image: "/images/news1-img.jpg",
    summary: "Краткое описание новости для детальной страницы.",
  },
  {
    id: 2,
    slug: "razvitie-yadernoj-energetiki",
    category: "Новости",
    title: "Развитие ядерной энергетики в Казахстане: итоги года",
    date: "15.01.2026",
    image: "/images/news2-img.jpg",
    summary: "Краткое описание новости для детальной страницы.",
  },
  {
    id: 3,
    slug: "podpisanie-memoranduma",
    category: "Новости",
    title: "Подписание меморандума о сотрудничестве с международными партнёрами",
    date: "22.12.2025",
    image: "/images/news3-img.jpg",
    summary: "Краткое описание новости для детальной страницы.",
  },
  {
    id: 4,
    slug: "mezhdunarodnaya-konferenciya",
    category: "События",
    title: "Международная конференция по ядерной безопасности в Алматы",
    date: "05.11.2025",
    image: "/images/news4-img.jpg",
    summary: "Краткое описание события для детальной страницы.",
  },
  {
    id: 5,
    slug: "vizit-delegacii-magate",
    category: "События",
    title: "Визит делегации МАГАТЭ на производственные объекты КАЭС",
    date: "18.10.2025",
    image: "/images/news5-img.jpg",
    summary: "Краткое описание события для детальной страницы.",
  },
  {
    id: 6,
    slug: "forum-energetikov",
    category: "События",
    title: "Форум энергетиков Центральной Азии — 2025",
    date: "01.09.2025",
    image: "/images/news1-img.jpg",
    summary: "Краткое описание события для детальной страницы.",
  },
  {
    id: 7,
    slug: "zayavlenie-o-nachale-proektirovaniya",
    category: "Пресс-релизы",
    title: "Официальное заявление о начале второго этапа проектирования АЭС",
    date: "15.08.2025",
    image: "/images/news2-img.jpg",
    summary: "Краткое описание пресс-релиза для детальной страницы.",
  },
  {
    id: 8,
    slug: "otchet-ekologicheskoy-bezopasnosti",
    category: "Пресс-релизы",
    title: "КАЭС публикует отчёт об экологической безопасности за первое полугодие",
    date: "30.07.2025",
    image: "/images/news3-img.jpg",
    summary: "Краткое описание пресс-релиза для детальной страницы.",
  },
  {
    id: 9,
    slug: "kommentariy-peregovory-edf",
    category: "Пресс-релизы",
    title: "Комментарий пресс-службы по результатам переговоров с EDF",
    date: "14.07.2025",
    image: "/images/news4-img.jpg",
    summary: "Краткое описание пресс-релиза для детальной страницы.",
  },
];

export async function getFeaturedNews(): Promise<NewsItem[]> {
  const items = await fetchNews("/api/v1/news/featured/");
  if (items.length === 0) return FALLBACK_NEWS.slice(0, 5);
  return items.map(mapNewsItem);
}

export async function getAllNews(): Promise<NewsItem[]> {
  const items = await fetchNews("/api/v1/news/");
  if (items.length === 0) return FALLBACK_NEWS;
  return items.map(mapNewsItem);
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/news/${slug}/`, {
      cache: "no-store",
    });

    if (response.ok) {
      const item: ApiNewsItem = await response.json();
      return mapNewsItem(item);
    }
  } catch (err) {
    console.warn(`News detail API unavailable (${slug}):`, err);
  }

  const fallbackItem = FALLBACK_NEWS.find((item) => item.slug === slug);
  return fallbackItem ?? null;
}