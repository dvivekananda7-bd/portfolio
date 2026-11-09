import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { site } from "@/content/site";

const socials = [
  { label: "Instagram", href: site.links.instagram },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "Facebook", href: site.links.facebook },
  { label: "YouTube", href: site.links.youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-black py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Wordmark size="lg" />
            <p className="mt-4 max-w-xs text-sm text-text-secondary">
              Video production and brand content, built to travel further.
            </p>
          </div>

          <div>
            <h3 className="label mb-4 text-accent">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-text-secondary transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="text-text-secondary transition-colors hover:text-accent"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="text-text-secondary">{site.location}</li>
            </ul>
          </div>

          <div>
            <h3 className="label mb-4 text-accent">Follow</h3>
            <ul className="space-y-2 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-secondary transition-colors hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border-soft pt-6 text-xs text-text-faint">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
