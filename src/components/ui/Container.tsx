import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1480px] px-5 sm:px-8 md:px-12 lg:px-18",
        className
      )}
    >
      {children}
    </div>
  );
}
