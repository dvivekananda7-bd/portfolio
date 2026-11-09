import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="glow-top relative py-20 md:py-32">
      <Container>
        <div className="rounded-2xl border border-border bg-black/40 p-8 text-center backdrop-blur-sm md:p-16">
          <span className="label mb-6 inline-block rounded-full border border-border px-4 py-1.5 text-accent">
            Fuel your growth
          </span>

          <h2 className="display display-xl mx-auto mb-6 max-w-[16ch] text-[clamp(2.2rem,6vw,4.5rem)]">
            <span className="text-white">Let&apos;s build </span>
            <span className="text-accent">something</span>
          </h2>

          <p className="mx-auto mb-10 max-w-xl text-lg text-text-secondary">
            Based in {site.location}. Open to campaigns, productions and
            collaborations — locally and remote.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button href={site.links.contactForm} external>
              Send a Message
            </Button>
            <Button href={`mailto:${site.email}`} variant="outline">
              Email me
            </Button>
          </div>

          <ul className="mx-auto mt-12 grid max-w-lg gap-4 sm:grid-cols-2">
            <li className="rounded-xl border border-border p-5 text-left">
              <span className="label mb-1.5 block text-accent">Email</span>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-white transition-colors hover:text-accent"
              >
                {site.email}
              </a>
            </li>
            <li className="rounded-xl border border-border p-5 text-left">
              <span className="label mb-1.5 block text-accent">Phone</span>
              <a
                href={`tel:${site.phone}`}
                className="text-sm text-white transition-colors hover:text-accent"
              >
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
