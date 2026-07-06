import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/content/categories";
import { CategoryGallery } from "./CategoryGallery";

export function FeaturedWork() {
  return (
    <section id="work" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Featured Work" title="Campaigns and films, side by side" />
        <div>
          {categories.map((category) => (
            <CategoryGallery key={category.slug} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
