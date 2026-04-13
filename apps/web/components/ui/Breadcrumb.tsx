import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string; // если нет href — текущая страница (не ссылка)
}

interface Props {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: Props) {
  return (
    <nav
      className={`flex items-center flex-wrap gap-1 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <Link
        href="/"
        className="text-gray-400 hover:text-[#1E4080] transition-colors font-light"
      >
        Главная
      </Link>

      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <span className="text-gray-300 select-none">/</span>
          {item.href ? (
            <Link
              href={item.href}
              className="text-gray-400 hover:text-[#1E4080] transition-colors font-light"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-700 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
