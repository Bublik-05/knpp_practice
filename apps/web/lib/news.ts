export type NewsCategory = "Новости" | "События" | "Пресс-релизы";

export interface NewsItem {
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
    cover_image: string | null;
    category: NewsCategory;
    published_date: string | null;
}

const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

async function fetchNews(path: string): Promise<ApiNewsItem[]> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch news: ${response.status}`);
    }

    return response.json();
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
    };
}

export async function getFeaturedNews(): Promise<NewsItem[]> {
    const items = await fetchNews("/api/v1/news/featured/");
    return items.map(mapNewsItem);
}

export async function getAllNews(): Promise<NewsItem[]> {
    const items = await fetchNews("/api/v1/news/");
    return items.map(mapNewsItem);
}