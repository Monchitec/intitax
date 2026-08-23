export const buttonStyles = {
  base: "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  variants: {
    primary:
      "bg-primary text-primary-foreground hover:opacity-90 shadow-sm shadow-primary/20",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline:
      "border border-border bg-transparent text-foreground hover:bg-muted",
    ghost: "text-foreground hover:bg-muted",
  },
  sizes: {
    sm: "h-9 px-3 text-xs gap-1.5",
    md: "h-10 px-4 py-2 text-sm gap-2",
    lg: "h-11 px-6 text-base gap-2.5",
    icon: "h-10 w-10 p-0",
  },
};
