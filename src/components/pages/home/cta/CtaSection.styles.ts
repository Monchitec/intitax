export const ctaStyles = {
  section:
    "py-12 sm:py-16 tv:py-24 3xl:py-28 bg-background border-t border-border/80 scroll-mt-20 tv:min-h-[calc(100dvh-5.5rem)] tv:flex tv:flex-col tv:justify-center",
  container:
    "mx-auto max-w-5xl tv:max-w-[94vw] 3xl:max-w-[92vw] px-4 sm:px-6 lg:px-8 tv:px-12 3xl:px-16 tv:w-full",

  // Banner Card
  bannerCard:
    "relative overflow-hidden rounded-3xl border-2 border-primary/30 bg-card p-8 sm:p-14 tv:p-20 3xl:p-24 text-center shadow-2xl shadow-primary/10",
  ambientGlow:
    "absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/15 blur-3xl pointer-events-none",

  badge:
    "inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider mb-6",
  badgeDot: "h-2 w-2 rounded-full bg-accent-success animate-ping",

  title:
    "text-3xl sm:text-5xl tv:text-6xl 3xl:text-7xl font-black tracking-tight text-foreground max-w-2xl tv:max-w-5xl mx-auto leading-tight",
  subtitle:
    "mt-4 text-base sm:text-lg tv:text-xl 3xl:text-2xl text-muted-foreground max-w-2xl tv:max-w-4xl mx-auto leading-relaxed",

  // Actions
  buttonGroup:
    "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4",
  btnPrimary:
    "px-8 py-3.5 tv:px-10 tv:py-4 tv:text-lg font-bold shadow-lg shadow-primary/25",
  btnSecondary: "px-7 py-3.5 tv:px-9 tv:py-4 tv:text-lg font-semibold",

  // Phone contact footer
  phoneFooter:
    "mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground",
  phoneLink: "font-bold text-primary hover:underline flex items-center gap-1.5",
};
