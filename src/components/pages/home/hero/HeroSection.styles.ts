export const heroStyles = {
  section:
    "relative overflow-hidden lg:min-h-[calc(100dvh-5rem)] flex flex-col justify-between pt-6 sm:pt-10 lg:pt-0 pb-6 sm:pb-8 lg:pb-6 bg-background",
  ambientGlow:
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10",
  container:
    "mx-auto w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1380px] px-4 sm:px-6 lg:px-8 xl:px-10 mt-0 lg:my-auto lg:-translate-y-6 lg:flex-1 flex flex-col justify-start lg:justify-center",

  // 2-Column Grid (Activo en Tablet md y Desktop lg/xl)
  grid: "grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 xl:gap-14 items-center",
  contentCol: "md:col-span-6 lg:col-span-7 xl:col-span-7 text-left",
  visualCol:
    "hidden md:flex md:col-span-6 lg:col-span-5 xl:col-span-5 justify-center w-full md:translate-y-2 lg:translate-y-7",

  // Titles (Más grande y expansivo en Desktop/Laptop)
  title:
    "text-[38px] sm:text-[52px] lg:text-[62px] xl:text-[72px] font-black tracking-tight text-foreground leading-[1.05]",
  titleHighlight: "text-primary block sm:inline",
  subtitle:
    "mt-3 sm:mt-4 lg:mt-5 max-w-xl lg:max-w-2xl text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed",

  // CTA Action Buttons
  ctaGroup:
    "mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5",
  ctaBtnPrimary: "px-7 py-3 text-base font-bold shadow-md shadow-primary/25",
  ctaBtnSecondary: "px-6 py-3 text-base font-semibold",
};
