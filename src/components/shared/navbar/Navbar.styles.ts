export const navbarStyles = {
  header:
    "sticky top-0 z-50 w-full border-b border-border/80 bg-background/85 backdrop-blur-md transition-colors duration-200",
  container:
    "mx-auto flex h-20 sm:h-22 max-w-7xl tv:max-w-[94vw] 3xl:max-w-[92vw] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 tv:px-12 3xl:px-16",

  // Logo & Branding
  brandGroup: "flex items-center gap-3 shrink-0",
  logoLink:
    "flex items-center transition-opacity hover:opacity-90 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg shrink-0",

  // Desktop Navigation
  desktopNav: "hidden lg:flex items-center gap-1 xl:gap-2 shrink-0",
  navLink:
    "inline-flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap",

  // Right Actions (Teléfono destacado cápsula oficial + Idioma + Tema)
  actionsGroup: "hidden lg:flex items-center gap-3 shrink-0",
  phoneButton:
    "inline-flex items-center gap-2.5 rounded-full bg-primary/10 hover:bg-primary/15 text-primary border border-primary/25 px-4.5 py-2 text-sm sm:text-base font-bold shadow-sm hover:shadow-md transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 active:scale-[0.98]",
  phoneIcon: "h-4 w-4 text-primary shrink-0",

  // Mobile Trigger
  mobileTriggerGroup: "flex lg:hidden items-center gap-2.5 shrink-0",
  mobileMenuBtn:
    "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer transition-colors",

  // Mobile Drawer
  mobileDrawer:
    "lg:hidden fixed inset-x-0 top-20 sm:top-22 border-b border-border bg-background/95 backdrop-blur-xl p-6 shadow-2xl transition-all duration-200 animate-in fade-in slide-in-from-top-2",
  mobileNavList: "flex flex-col gap-1.5",
  mobileNavLink:
    "flex items-center justify-between px-4 py-3 text-base font-semibold text-foreground hover:bg-muted rounded-xl transition-colors cursor-pointer",
  mobileActionsFooter: "mt-6 pt-6 border-t border-border flex flex-col gap-3",
  mobilePhoneLink:
    "flex items-center justify-center gap-2.5 rounded-full bg-primary/10 hover:bg-primary/15 border border-primary/25 p-3.5 text-base font-bold text-primary transition-all cursor-pointer",
};
