"use client";

import * as React from "react";
import { useLanguage } from "@/components/shared/providers";
import { heroMarqueeStyles } from "./HeroFormsMarquee.styles";

export const HeroFormsMarquee = React.memo(function HeroFormsMarquee() {
  const { t } = useLanguage();
  const items = t.hero.formsTicker || [];

  if (!items.length) return null;

  // Duplicamos la lista para crear el bucle infinito continuo
  const duplicatedItems = [...items, ...items];

  return (
    <div className={heroMarqueeStyles.wrapper}>
      {/* Degenerados laterales para desvanecimiento continuo */}
      <div className={heroMarqueeStyles.fadeLeft} />
      <div className={heroMarqueeStyles.fadeRight} />

      {/* Pista continua infinita con pausa en hover */}
      <div className={heroMarqueeStyles.track}>
        {duplicatedItems.map((item, index) => {
          const isSchedule = item.code.toLowerCase().includes("sch");
          const prefix = isSchedule ? "SCHEDULE" : "FORM";
          const displayCode = isSchedule ? "C" : item.code;

          return (
            <div
              key={`${item.code}-${index}`}
              className={heroMarqueeStyles.card}
            >
              {/* 1. Recuadro con el Código del Formulario */}
              <div className={heroMarqueeStyles.formCodeBox}>
                <span className={heroMarqueeStyles.formCodePrefix}>
                  {prefix}
                </span>
                <span
                  className={`${heroMarqueeStyles.formCodeNumber} ${
                    isSchedule ? "text-sm sm:text-base font-black" : ""
                  }`}
                >
                  {displayCode}
                </span>
              </div>

              {/* 2. Título formal y descripción del formulario */}
              <div className={heroMarqueeStyles.contentRight}>
                <h4 className={heroMarqueeStyles.name}>{item.name}</h4>
                <p className={heroMarqueeStyles.description}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});
