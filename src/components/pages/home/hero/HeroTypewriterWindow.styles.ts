export const heroTypewriterStyles = {
  wrapper:
    "relative mx-auto w-full max-w-[250px] xs:max-w-[280px] sm:max-w-[320px] md:max-w-[330px] lg:max-w-[335px] xl:max-w-[370px] 2xl:max-w-[430px] tv:max-w-[480px] 3xl:max-w-[540px]",
  ambientGlow:
    "absolute -inset-4 rounded-3xl bg-primary/20 blur-3xl opacity-50 pointer-events-none -z-10",

  // Laptop Outer Chassis with 3D Perspective (Reducido para móvil/laptop, expandido en 2xl y TV)
  laptopContainer:
    "relative flex flex-col items-center select-none py-1 w-full scale-[0.88] md:scale-[0.90] lg:scale-[0.90] xl:scale-[0.92] 2xl:scale-[1.02] tv:scale-[1.08] 3xl:scale-[1.16] origin-top",

  // Laptop Screen (Lid & Display standing upright)
  screenLid:
    "w-full rounded-t-xl sm:rounded-t-2xl bg-slate-800 p-2 sm:p-2.5 border-t-2 border-x-2 border-slate-600/70 shadow-2xl relative z-10 [transform:perspective(1200px)_rotateX(-2deg)] origin-bottom",
  cameraDot:
    "absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-slate-500 border border-slate-400",
  screenDisplay:
    "relative overflow-hidden rounded-md sm:rounded-lg bg-card border border-border/80 shadow-inner flex flex-col min-h-[140px] sm:min-h-[155px] md:min-h-[165px] lg:min-h-[175px] xl:min-h-[185px] 2xl:min-h-[205px] tv:min-h-[220px]",

  // Document Screen Header
  docHeader:
    "flex items-center justify-between border-b border-border/70 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-muted/40",
  docTitleGroup: "flex items-center gap-1.5",
  docIcon: "h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary",
  docTitle:
    "text-[10px] sm:text-xs font-bold text-foreground tracking-tight flex items-center gap-1",
  irsBadge:
    "flex items-center bg-primary/10 border border-primary/20 px-2 py-0.5 rounded shadow-xs",
  irsIcon: "h-3 sm:h-3.5 w-auto text-primary fill-current",

  // Document Screen Canvas
  docCanvas:
    "flex-1 pt-2 sm:pt-2.5 px-2.5 sm:px-3.5 pb-2 bg-card flex items-start justify-start relative overflow-hidden",
  watermarkShield:
    "absolute right-1 -bottom-3 h-16 w-16 sm:h-20 sm:w-20 text-primary/5 pointer-events-none -z-0",
  contentWrapper:
    "relative z-10 font-[family-name:var(--font-jetbrains-mono)] text-xs sm:text-sm md:text-xs lg:text-sm xl:text-[15px] 2xl:text-[16px] font-normal text-foreground leading-relaxed break-words tracking-tight",
  cursor:
    "inline-block w-1.5 h-3.5 sm:h-4 bg-primary ml-1 align-middle animate-pulse rounded-xs",

  // Metallic Hinge
  hinge:
    "h-1.5 sm:h-2 w-20 sm:w-32 bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 rounded-xs -mt-0.5 z-30 shadow-md border-b border-slate-700/50",

  // Laptop Base (Chassis angled forward in 3D perspective - Plomo Metálico)
  baseDeck:
    "w-[102%] sm:w-[104%] rounded-b-xl sm:rounded-b-2xl bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border-b-3 border-x-2 border-slate-500/80 p-1.5 sm:p-3 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] relative z-20 [transform:perspective(800px)_rotateX(28deg)] origin-top -mt-0.5 sm:-mt-1",
  baseFrontLip:
    "absolute bottom-0 left-1/2 -translate-x-1/2 w-12 sm:w-20 h-0.5 sm:h-1 rounded-t-xs bg-slate-400/80 shadow-xs",

  // Keyboard Surface (Gris Plomo / Space Gray)
  keyboardGrid:
    "rounded-lg bg-slate-900/90 p-1 sm:p-2.5 border border-slate-700/80 shadow-inner flex flex-col gap-0.5 sm:gap-1.5",
  keyRow: "flex justify-center gap-0.5 sm:gap-1.5 w-full",
  keycap:
    "h-3 sm:h-5.5 flex-1 min-w-0 rounded-xs sm:rounded-sm bg-gradient-to-b from-slate-600 to-slate-700 border-t border-x border-slate-500/80 border-b border-b-slate-900 flex items-center justify-center text-[6px] xs:text-[7px] sm:text-[10px] font-mono text-slate-100 font-extrabold transition-all duration-75 shadow-xs cursor-default overflow-hidden",
  keycapActive:
    "!bg-primary !text-white !border-primary ring-1 sm:ring-2 ring-primary shadow-[0_0_12px_rgba(37,99,235,1)] translate-y-0.5 !border-b-0 brightness-150 font-black scale-105",
  spacebar: "flex-4 min-w-0 max-w-[80px] sm:max-w-[150px]",

  // Trackpad (Plomo satinado)
  trackpad:
    "mx-auto mt-1 sm:mt-2.5 w-16 sm:w-28 h-3.5 sm:h-6 rounded-sm sm:rounded-md border border-slate-600/80 bg-slate-700/60 shadow-inner",
};
