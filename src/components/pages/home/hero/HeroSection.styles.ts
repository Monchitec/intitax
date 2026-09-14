export const heroStyles = {
  section:
    "relative overflow-hidden lg:min-h-[calc(100dvh-5rem)] tv:h-[calc(100dvh-5.5rem)] tv:max-h-[calc(100dvh-5.5rem)] tv:min-h-0 flex flex-col justify-between pt-6 sm:pt-10 lg:pt-0 pb-6 sm:pb-8 lg:pb-6 tv:py-4 3xl:py-6 bg-background",
  ambientGlow:
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10",
  container:
    "mx-auto w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1380px] tv:max-w-[94vw] 3xl:max-w-[92vw] px-4 sm:px-6 lg:px-8 xl:px-10 tv:px-12 3xl:px-16 mt-0 lg:my-auto lg:-translate-y-6 lg:flex-1 tv:my-0 tv:translate-y-0 tv:h-full flex flex-col justify-start lg:justify-center tv:justify-between",

  // 2-Column Grid (Activo en Tablet md y Desktop lg/xl)
  grid: "grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 xl:gap-14 tv:gap-16 3xl:gap-24 items-center tv:flex-1 tv:my-auto",
  contentCol:
    "md:col-span-6 lg:col-span-7 xl:col-span-7 tv:col-span-7 3xl:col-span-7 text-left",
  visualCol:
    "hidden md:flex md:col-span-6 lg:col-span-5 xl:col-span-5 tv:col-span-5 3xl:col-span-5 justify-center w-full md:translate-y-2 lg:translate-y-7 tv:translate-y-0",

  // Titles (Más grande y expansivo en Desktop/Laptop/TV)
  title:
    "text-[38px] sm:text-[52px] lg:text-[62px] xl:text-[72px] tv:text-[80px] 3xl:text-[92px] font-black tracking-tight text-foreground leading-[1.05] tv:leading-[1.02]",
  titleHighlight: "text-primary block sm:inline",
  subtitle:
    "mt-3 sm:mt-4 lg:mt-5 tv:mt-6 max-w-xl lg:max-w-2xl tv:max-w-3xl 3xl:max-w-4xl text-sm sm:text-base lg:text-lg xl:text-xl tv:text-2xl text-muted-foreground leading-relaxed",

  // CTA Action Buttons
  ctaGroup:
    "mt-4 sm:mt-6 tv:mt-8 3xl:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 tv:gap-5",
  ctaBtnPrimary:
    "px-7 py-3 tv:px-9 tv:py-4 text-base tv:text-lg font-bold shadow-md shadow-primary/25",
  ctaBtnSecondary: "px-6 py-3 tv:px-8 tv:py-4 text-base tv:text-lg font-semibold",
};
