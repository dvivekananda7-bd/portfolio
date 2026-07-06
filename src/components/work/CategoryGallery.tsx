import type { Category } from "@/content/categories";
import { GalleryItemCard } from "./GalleryItemCard";

export function CategoryGallery({ category }: { category: Category }) {
  return (
    <div className="border-b border-border py-16 last:border-b-0">
      <h3 className="font-heading text-3xl font-semibold text-text-primary">{category.title}</h3>
      <p className="mt-3 max-w-2xl text-text-secondary">{category.description}</p>

      {category.comingSoon ? (
        <p className="mt-8 rounded-xl border border-dashed border-border p-6 text-sm text-text-secondary">
          Gallery coming soon — assets pending from the project owner.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {category.items.map((item) => (
            <GalleryItemCard key={item.url} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
