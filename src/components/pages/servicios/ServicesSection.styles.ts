export const servicesStyles = {
  // Clean padding
  section:
    "pt-6 sm:pt-10 pb-16 sm:pb-24 bg-muted/20 border-b border-border/70 scroll-mt-16",
  container:
    "mx-auto max-w-7xl 2xl:max-w-[94vw] 3xl:max-w-[92vw] px-4 sm:px-6 lg:px-8 2xl:px-10 tv:px-12 3xl:px-16 tv:w-full",

  // Header
  headerWrapper:
    "mx-auto max-w-3xl 2xl:max-w-4xl tv:max-w-5xl text-center mb-10 sm:mb-14 tv:mb-16",
  title:
    "text-3xl sm:text-5xl 2xl:text-6xl font-black tracking-tight text-foreground",
  subtitle: "mt-3 text-sm sm:text-base 2xl:text-lg tv:text-lg text-muted-foreground leading-relaxed",

  // Symmetrical Grid
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 tv:grid-cols-5 gap-6 sm:gap-7 tv:gap-8",

  // Minimal Clean Card Base
  cardBase:
    "group relative flex flex-col justify-between rounded-3xl border p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer block",

  // 5 Distinct Pastel Color Themes per Card (100% Unique Colors)
  cardAmber:
    "bg-[#FEF6EE] border-[#FBD6B0] hover:border-[#F18A0E] hover:shadow-[#F18A0E]/15 dark:bg-[#251E17] dark:border-[#F18A0E]/30",
  cardLavender:
    "bg-[#F5F3FF] border-[#DDD6FE] hover:border-[#8B5CF6] hover:shadow-[#8B5CF6]/15 dark:bg-[#1E1B2E] dark:border-[#8B5CF6]/30",
  cardSky:
    "bg-[#F0F7FE] border-[#C3E2FE] hover:border-[#0EA5E9] hover:shadow-[#0EA5E9]/15 dark:bg-[#15202E] dark:border-[#38BDF8]/30",
  cardRose:
    "bg-[#FEF2F2] border-[#FECDD3] hover:border-[#F43F5E] hover:shadow-[#F43F5E]/15 dark:bg-[#28181A] dark:border-[#FB7185]/30",
  cardEmerald:
    "bg-[#F0FDF4] border-[#BBF7D0] hover:border-[#22C55E] hover:shadow-[#22C55E]/15 dark:bg-[#14261C] dark:border-[#4ADE80]/30",

  // Corner Arrow Buttons (CTEC style)
  arrowButtonAmber:
    "flex h-9 w-9 items-center justify-center rounded-xl bg-[#F18A0E]/15 text-[#F18A0E] transition-all duration-300 group-hover:bg-[#F18A0E] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs shrink-0",
  arrowButtonLavender:
    "flex h-9 w-9 items-center justify-center rounded-xl bg-[#8B5CF6]/15 text-[#7C3AED] transition-all duration-300 group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs shrink-0",
  arrowButtonSky:
    "flex h-9 w-9 items-center justify-center rounded-xl bg-[#0EA5E9]/15 text-[#0284C7] transition-all duration-300 group-hover:bg-[#0EA5E9] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs shrink-0",
  arrowButtonRose:
    "flex h-9 w-9 items-center justify-center rounded-xl bg-[#F43F5E]/15 text-[#E11D48] transition-all duration-300 group-hover:bg-[#F43F5E] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs shrink-0",
  arrowButtonEmerald:
    "flex h-9 w-9 items-center justify-center rounded-xl bg-[#22C55E]/15 text-[#16A34A] transition-all duration-300 group-hover:bg-[#22C55E] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs shrink-0",

  // Card Content
  cardHeaderRow: "flex items-start justify-between gap-3 mb-2",
  cardTitle:
    "text-xl font-bold tracking-tight text-foreground dark:text-white leading-snug",
  cardNote: "text-xs italic text-primary font-semibold block mt-0.5",
  cardDescription:
    "text-xs sm:text-sm text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed mt-2",

  // Feature Check list
  featureList:
    "mt-6 space-y-2.5 pt-4 border-t border-black/10 dark:border-white/10",
  featureItem:
    "flex items-start gap-2 text-xs sm:text-sm font-medium text-[#374151] dark:text-[#E5E7EB]",
  featureIcon: "h-4 w-4 text-accent-success shrink-0 mt-0.5",
};
