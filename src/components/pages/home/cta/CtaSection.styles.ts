export const ctaStyles = {
  section:
    "py-12 sm:py-16 bg-background border-t border-border/80 scroll-mt-20",
  container: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",

  // Banner Card
  bannerCard:
    "relative overflow-hidden rounded-3xl border-2 border-primary/30 bg-card p-8 sm:p-14 text-center shadow-2xl shadow-primary/10",
  ambientGlow:
    "absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/15 blur-3xl pointer-events-none",

  badge:
    "inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider mb-6",
  badgeDot: "h-2 w-2 rounded-full bg-accent-success animate-ping",

  title:
    "text-3xl sm:text-5xl font-black tracking-tight text-foreground max-w-2xl mx-auto leading-tight",
  subtitle:
    "mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed",

  // Actions
  buttonGroup:
    "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4",
  btnPrimary: "px-8 py-3.5 text-base font-bold shadow-lg shadow-primary/25",
  btnSecondary: "px-7 py-3.5 text-base font-semibold",

  // Phone contact footer
  phoneFooter:
    "mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground",
  phoneLink: "font-bold text-primary hover:underline flex items-center gap-1.5",
};
