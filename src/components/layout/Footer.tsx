import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <Container>
        <div className="flex flex-col items-center gap-4 text-sm text-text-secondary md:flex-row md:justify-between">
          <a href={`mailto:${site.email}`} className="hover:text-accent">
            {site.email}
          </a>
          <div className="flex gap-6">
            <a href={site.links.facebook} className="hover:text-accent">
              Facebook
            </a>
            <a href={site.links.linkedin} className="hover:text-accent">
              LinkedIn
            </a>
            <a href={site.links.instagram} className="hover:text-accent">
              Instagram
            </a>
          </div>
          <p>
            © {new Date().getFullYear()} {site.name}. Made with ❤️
          </p>
        </div>
      </Container>
    </footer>
  );
}
