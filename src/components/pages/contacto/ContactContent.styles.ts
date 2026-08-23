export const contactStyles = {
  container: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-4 sm:pb-8",
  backLink:
    "text-muted-foreground hover:text-foreground mb-4 inline-flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer",

  // Header
  headerWrapper: "mb-8 sm:mb-10 text-center max-w-3xl mx-auto",
  badge:
    "border-primary/20 bg-primary/5 text-primary mb-3 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider",
  title: "text-foreground text-3xl font-black tracking-tight sm:text-5xl",
  subtitle:
    "text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base",

  // Main 2-Column Bento Grid: Left has the big Consultation card, Right has 2 stacked cards
  mainGrid: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-4",

  // Left Column (Schedule Consultation - spans both rows of height)
  leftColumn: "lg:col-span-7 flex flex-col",
  bookingTriggerCard:
    "h-full flex flex-col items-center justify-center text-center p-8 sm:p-10 rounded-3xl border border-primary/25 bg-gradient-to-br from-card via-card to-primary/5 shadow-md",
  bookingTriggerContent: "max-w-md mx-auto flex flex-col items-center",
  bookingTitle: "text-2xl sm:text-3xl font-black tracking-tight text-foreground",
  bookingSubtitle: "text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed",
  bookButton:
    "mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-sm sm:text-base font-bold text-primary-foreground shadow-md transition-all hover:bg-accent-hover hover:scale-105 active:scale-95 cursor-pointer",

  // Right Column (Stacked 2 cards: Email + Coverage)
  rightColumn: "lg:col-span-5 flex flex-col gap-6",
  contactCard:
    "flex-1 group flex flex-col items-center justify-center text-center p-6 sm:p-7 rounded-3xl border border-border/80 bg-card shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5",
  iconWrapper:
    "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground mb-3 shadow-xs",
  cardTitle: "text-base font-bold text-foreground mb-1",
  cardDesc: "text-xs text-muted-foreground mb-2.5 max-w-xs",
  cardLink:
    "font-bold text-sm text-primary hover:text-accent-hover transition-colors break-all",

  // Calendly Container
  calendlyContainer: "animate-in fade-in slide-in-from-bottom-3 duration-300 max-w-4xl mx-auto my-6",
  calendlyCard:
    "rounded-3xl border border-border/80 bg-card p-2 sm:p-4 shadow-xl overflow-hidden min-h-[700px]",
  calendlyIframe: "w-full min-h-[680px] sm:min-h-[720px] rounded-2xl border-0",
};
