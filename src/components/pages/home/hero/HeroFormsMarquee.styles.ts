export const heroMarqueeStyles = {
  wrapper:
    "group/marquee relative w-full overflow-hidden py-2 sm:py-3 mt-5 sm:mt-8 lg:mt-10 select-none",

  // Side Fade Gradients for continuous floating effect
  fadeLeft:
    "pointer-events-none absolute inset-y-0 left-0 z-20 w-12 sm:w-28 bg-gradient-to-r from-background to-transparent",
  fadeRight:
    "pointer-events-none absolute inset-y-0 right-0 z-20 w-12 sm:w-28 bg-gradient-to-l from-background to-transparent",

  // Marquee Track with pause on hover
  track:
    "flex w-max items-center gap-3.5 sm:gap-4 animate-marquee group-hover/marquee:[animation-play-state:paused] hover:[animation-play-state:paused]",

  // FinTech Horizontal Card (Clean & Minimal without badges)
  card: "group/card relative flex items-center gap-3.5 w-[315px] sm:w-[355px] h-[86px] sm:h-[92px] rounded-2xl border border-border/70 bg-card p-3 sm:p-3.5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 cursor-pointer overflow-hidden",

  // Form Code Badge Box
  formCodeBox:
    "relative flex flex-col h-11 w-14 sm:h-12 sm:w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/25 transition-all duration-300 group-hover/card:bg-primary group-hover/card:text-primary-foreground group-hover/card:scale-105 group-hover/card:shadow-md px-1",

  formCodePrefix:
    "text-[7.5px] sm:text-[8px] font-bold uppercase tracking-wider opacity-85 leading-none select-none text-center",

  formCodeNumber:
    "font-mono text-xs sm:text-[13px] font-black tracking-tight leading-tight mt-0.5 text-center whitespace-nowrap",

  // Right Details Content
  contentRight: "flex-1 min-w-0 flex flex-col justify-center gap-1",

  // Full Descriptive Form Title
  name: "text-xs sm:text-[13px] font-bold text-foreground leading-tight line-clamp-1 group-hover/card:text-primary transition-colors",

  // Brief Form Description
  description:
    "text-[10.5px] sm:text-[11px] text-muted-foreground leading-snug line-clamp-2",
};
