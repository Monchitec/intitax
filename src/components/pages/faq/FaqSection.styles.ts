export const faqStyles = {
  // Connected seamlessly with reduced top padding
  section: "pt-8 sm:pt-12 pb-16 sm:pb-24 bg-background scroll-mt-20 border-t border-border/60",
  container: "mx-auto max-w-4xl tv:max-w-6xl 3xl:max-w-7xl px-4 sm:px-6 lg:px-8 tv:px-12",

  // Header
  headerWrapper: "text-center mb-8 sm:mb-12",
  badge:
    "inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider mb-3",
  title: "text-3xl sm:text-5xl font-black tracking-tight text-foreground",
  subtitle: "mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed",

  // Accordion Container
  accordionList: "space-y-3.5",
  accordionItem:
    "rounded-2xl border border-border/80 bg-card transition-all duration-200 hover:border-primary/40 overflow-hidden",
  triggerButton:
    "w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-foreground hover:text-primary transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  questionText: "text-base sm:text-lg font-bold pr-4",
  chevronIcon:
    "h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200",
  chevronIconOpen: "rotate-180 text-primary",

  // Content panel
  contentPanel:
    "px-4 sm:px-5 pb-5 pt-1 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/40 animate-in fade-in slide-in-from-top-1 duration-200",
};
