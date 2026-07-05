import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, onClick, variant = "primary", children, className }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-colors duration-200",
    variant === "primary" && "bg-accent text-background hover:bg-accent/90",
    variant === "outline" && "border border-border text-text-primary hover:border-accent",
    className
  );

  if (href) {
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
