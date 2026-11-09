import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "light";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-md px-6 py-3.5 text-sm font-semibold transition-all duration-200";

const variants = {
  // Electric orange with black type — the only filled button on the site.
  primary: "bg-accent text-black hover:bg-accent-hot hover:-translate-y-0.5",
  outline:
    "border border-border text-white hover:border-accent hover:text-accent",
  light: "bg-white text-black hover:bg-accent hover:text-black",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className,
  external,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
