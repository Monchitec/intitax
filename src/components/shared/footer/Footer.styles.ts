export const footerStyles = {
  footer:
    "border-t border-border bg-card/60 pt-16 pb-12 transition-colors duration-200",
  container:
    "mx-auto max-w-7xl 2xl:max-w-[94vw] 3xl:max-w-[92vw] px-4 sm:px-6 lg:px-8 2xl:px-10 tv:px-12 3xl:px-16 tv:w-full",

  // Top Grid
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border/70",

  // Brand Column
  brandCol: "lg:col-span-2 space-y-4",
  logoLink:
    "inline-flex items-center transition-opacity hover:opacity-90 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg",
  description:
    "text-sm tv:text-base text-muted-foreground leading-relaxed max-w-sm tv:max-w-md",
  trustTag:
    "inline-flex items-center gap-1.5 text-xs font-semibold text-accent-success",

  // Column Lists
  colTitle: "text-sm font-bold text-foreground uppercase tracking-wider mb-4",
  linkList: "space-y-2.5 text-sm text-muted-foreground",
  linkItem: "block hover:text-primary transition-colors cursor-pointer",

  // Bottom Legal Bar
  bottomBar:
    "pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground",
  disclaimer:
    "max-w-3xl tv:max-w-5xl text-[11px] tv:text-xs text-muted-foreground/80 leading-relaxed mb-4 md:mb-0",
  copyright: "shrink-0 font-medium",
};
