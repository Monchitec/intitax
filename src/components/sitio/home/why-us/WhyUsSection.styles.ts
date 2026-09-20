export const whyUsStyles = {
  section:
    "py-12 sm:py-16 tv:py-24 3xl:py-28 bg-muted/20 border-t border-border/80 scroll-mt-20 tv:min-h-[calc(100dvh-5.5rem)] tv:flex tv:flex-col tv:justify-center",
  container:
    "mx-auto max-w-7xl 2xl:max-w-[94vw] 3xl:max-w-[92vw] px-4 sm:px-6 lg:px-8 2xl:px-10 tv:px-12 3xl:px-16 tv:w-full",

  // Header (Left-aligned codewithbhurtel style)
  headerWrapper:
    "max-w-5xl 2xl:max-w-none mx-auto mb-10 2xl:mb-12 tv:mb-14 text-left flex flex-col items-start",
  title:
    "text-2xl sm:text-4xl 2xl:text-5xl 3xl:text-6xl font-black tracking-tight text-foreground",
  accentLine: "w-12 h-1 bg-primary rounded-full mt-2.5 mb-3",
  subtitle:
    "text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-muted-foreground leading-relaxed max-w-2xl 2xl:max-w-3xl tv:max-w-4xl",

  // Comparison Grid
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 2xl:gap-10 tv:gap-12 3xl:gap-16 max-w-5xl 2xl:max-w-none mx-auto",

  // Intitax Winner Card
  intitaxCard:
    "relative rounded-3xl border-2 border-primary bg-card p-8 sm:p-10 tv:p-12 3xl:p-14 shadow-xl shadow-primary/10",
  intitaxBadge:
    "absolute -top-4 left-8 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground shadow-sm",
  cardTitleIntitax:
    "text-2xl font-black text-foreground mb-6 flex items-center gap-3",
  titleIconIntitax: "h-7 w-7 text-primary",

  // Traditional Card
  traditionalCard:
    "rounded-3xl border border-border/80 bg-muted/40 p-8 sm:p-10 tv:p-12 3xl:p-14",
  cardTitleTraditional:
    "text-2xl font-bold text-muted-foreground mb-6 flex items-center gap-3",
  titleIconTraditional: "h-7 w-7 text-muted-foreground",

  // Feature Rows
  itemList: "space-y-6",
  itemBox: "flex flex-col gap-1.5",
  itemHeader: "text-sm font-bold text-foreground",
  itemDescIntitax:
    "flex items-start gap-2.5 text-sm text-foreground/90 font-medium",
  itemDescTraditional: "flex items-start gap-2.5 text-sm text-muted-foreground",
  iconCheck: "h-5 w-5 text-accent-success shrink-0 mt-0.5",
  iconCross: "h-5 w-5 text-destructive/70 shrink-0 mt-0.5",
};
