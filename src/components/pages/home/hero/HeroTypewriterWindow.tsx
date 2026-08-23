"use client";

import * as React from "react";
import { FileText, Shield } from "lucide-react";
import { useLanguage } from "@/components/shared/providers";
import { heroTypewriterStyles } from "./HeroTypewriterWindow.styles";

// Teclas del teclado para simular la laptop
const KEY_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "⌫"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "↵"],
  ["⇧", "Z", "X", "C", "V", "B", "N", "M", "⇧"],
  ["ctrl", "⌥", "SPACE", "⌘", "fn"],
];

function getActiveKeyForChar(char: string): string | null {
  if (!char) return null;
  if (char === " ") return "SPACE";
  const upper = char
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
  if (/^[A-Z]$/.test(upper)) return upper;
  return null;
}

export const HeroTypewriterWindow = React.memo(function HeroTypewriterWindow() {
  const { t } = useLanguage();
  const phrases = React.useMemo(
    () => t.hero.typewriterPhrases || [],
    [t.hero.typewriterPhrases],
  );

  const windowTitle = t.hero.windowTitle || "intitax • Asistencia de Impuestos";

  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [activeKey, setActiveKey] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!phrases.length) return;

    const currentPhrase = phrases[phraseIndex % phrases.length];

    if (!isDeleting) {
      // Escribiendo letra por letra de forma pausada
      if (displayText.length < currentPhrase.length) {
        const nextChar = currentPhrase[displayText.length];
        const timeoutId = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          setActiveKey(getActiveKeyForChar(nextChar));
        }, 75);
        return () => clearTimeout(timeoutId);
      } else {
        // Apagar cualquier tecla activa de forma limpia al terminar de escribir
        const releaseTimeout = setTimeout(() => {
          setActiveKey(null);
        }, 50);
        // Pausa generosa para leer cómodamente la frase completa (3.8 segundos)
        const timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 3800);
        return () => {
          clearTimeout(releaseTimeout);
          clearTimeout(timeoutId);
        };
      }
    } else {
      // Borrando letra por letra con la tecla Backspace ⌫
      if (displayText.length > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
          setActiveKey("⌫");
        }, 35);
        return () => clearTimeout(timeoutId);
      } else {
        // Pausa antes de comenzar a escribir la siguiente frase (400ms)
        const timeoutId = setTimeout(() => {
          setActiveKey(null);
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 400);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [displayText, isDeleting, phraseIndex, phrases]);

  return (
    <div className={heroTypewriterStyles.wrapper}>
      <div className={heroTypewriterStyles.ambientGlow} />

      <div className={heroTypewriterStyles.laptopContainer}>
        {/* 1. Laptop Screen (Lid & Display) */}
        <div className={heroTypewriterStyles.screenLid}>
          {/* Webcam dot */}
          <div className={heroTypewriterStyles.cameraDot} />

          {/* Screen Inner Display */}
          <div className={heroTypewriterStyles.screenDisplay}>
            {/* Document Header */}
            <div className={heroTypewriterStyles.docHeader}>
              <div className={heroTypewriterStyles.docTitleGroup}>
                <FileText className={heroTypewriterStyles.docIcon} />
                <span className={heroTypewriterStyles.docTitle}>
                  {windowTitle}
                </span>
              </div>

              <div className={heroTypewriterStyles.irsBadge}>
                {/* Logo Oficial de IRS.gov */}
                <svg
                  className={heroTypewriterStyles.irsIcon}
                  viewBox="0 0 159 62"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m66.8,8.9c2.5,0.1 4.2,0.6 4.9,1.2c0.7,0.6 1.1,2.2 1.1,4.5l0,28.1c0,2.4 -0.4,3.9 -1.1,4.5c-0.7,0.6 -2.4,1 -4.9,1.1l0,1.2l18.4,0l0,-1.2c-2.5,-0.1 -4.1,-0.5 -4.9,-1.1c-0.7,-0.6 -1.1,-2.1 -1.1,-4.5l0,-28.1c0,-2.3 0.4,-3.9 1.1,-4.5c0.8,-0.6 2.4,-1.1 4.9,-1.2l0,-1.1l-18.4,0l0,1.1z" />
                  <path d="m123.9,47.4c-0.7,-0.5 -1.6,-1.1 -2.4,-2.1l-12.7,-16c3.5,-0.6 6.1,-1.7 8.2,-3.4c2,-1.7 3,-4 3,-7.2c0,-4.6 -2.3,-7.9 -6.7,-9.6c-2.4,-1 -5.4,-1.3 -9,-1.3l-17.4,0l0,1.1c2.3,0.2 3.7,0.6 4.3,1.3c0.7,0.7 1.1,2.1 1.1,4.4l0,27.2c0,2.7 -0.4,4.4 -1,5.1c-0.6,0.6 -2,1.1 -4.4,1.3l0,1.2l17.3,0l0,-1.2c-2.4,-0.1 -3.8,-0.6 -4.6,-1.2c-0.7,-0.6 -1.1,-2.1 -1.1,-4.4l0,-12.4l3.5,-0.1l14.8,19.4l8.9,0l-0.2,-1.4c-0.5,-0.1 -1.1,-0.3 -1.6,-0.7zm-25.3,-19.5l0,-15.6c0,-1 0.2,-1.5 0.6,-1.7c0.4,-0.4 1.4,-0.5 3.2,-0.5c2.6,0 4.7,0.4 6.3,1.1c3,1.3 4.4,3.9 4.4,7.5c0,3.9 -1.7,6.5 -4.9,7.8c-1.9,0.7 -5.2,1.2 -9.6,1.4z" />
                  <path d="m150,32.3c-1.4,-1.8 -3.8,-3.8 -7.2,-6l-5.5,-3.3c-2,-1.3 -3.5,-2.6 -4.5,-3.8c-1,-1.1 -1.4,-2.4 -1.4,-4.2c0,-1.7 0.6,-3.2 1.8,-4.2c1.3,-1.1 2.8,-1.6 4.4,-1.6c2.2,0 4.5,0.9 6.6,2.4c2.3,1.6 4,4.4 4.9,8.4l1.4,0l-1.3,-13.4l-1.3,0c-0.1,0.7 -0.4,1.2 -0.6,1.6c-0.4,0.4 -0.8,0.6 -1.7,0.6c-0.2,0 -1.3,-0.4 -3.4,-1.1c-2,-0.7 -3.7,-1.1 -5.1,-1.1c-3.5,0 -6.3,1.1 -8.3,3.2c-2.2,2.2 -3.1,4.8 -3.1,7.9c0,2.4 0.8,4.6 2.6,6.6c0.8,1.1 2.2,2.1 3.7,3.2l5.3,3.3c3.1,2 5.2,3.4 6,4.4c1.6,1.5 2.3,3.3 2.3,5.4c0,2.3 -0.7,4 -2.3,5.4c-1.3,1.2 -3.1,1.8 -5.1,1.8c-3.7,0 -6.7,-1.5 -9.3,-4.4c-1.3,-1.7 -2.6,-3.9 -3.6,-6.7l-1.4,0l1.5,11.3c0.4,0.1 0.8,0.2 1.3,0.2l0,1.2l-1.1,0l0.1,0.7l1.4,0c0,-0.6 0.2,-1.1 0.5,-1.5c0.2,-0.5 0.7,-0.7 1.4,-0.7c0.2,0 1.4,0.4 3.6,1.1c2,0.7 4.1,1.1 6,1.1c3.8,0 7,-1.1 9.4,-3.3c2.5,-2.2 3.7,-5 3.7,-8.3c0.3,-2.3 -0.4,-4.4 -1.7,-6.2z" />
                  <path d="m126.9,48.3c-0.5,0 -0.9,-0.1 -1.3,-0.2l0.2,1.4l1.1,0l0,-1.2z" />
                  <path d="m57,11.4c-0.6,-1 -6.7,-3.9 -15.6,-5.7c-3.6,4 -3.6,5.6 -3.7,6.2c-0.1,0.6 1.2,2.3 2.5,4c2.4,3.2 3.1,3.8 3.5,4.8c0.7,1.7 -0.5,5.9 -1.3,9.6c0,-0.1 -2.2,-8.1 -3.1,-13.2c-0.1,-0.5 0,-0.7 0,-0.7c-5.4,-0.5 -9.1,-0.7 -9.7,2.1c-2.5,0 -3.7,0.7 -4,1.2c-0.6,1.1 0.1,3.3 0.6,4.4c0.4,-0.9 2.5,-0.7 3.2,-0.7c0.4,0.1 0.4,0.2 0.5,0.5l0,10.7l-6.5,0l-5.5,15.1c2.5,1.2 5.3,2.2 7,2.2s5.9,-2.2 6.5,-2.2c0.5,0 4.7,2.2 6.4,2.2c1.7,0 4.4,-0.9 7,-2.2l-5.5,-15.1c0,0 -5.7,0 -6.5,0c0,-2.4 0,-7.8 0,-10.3c-0.1,-0.6 -0.4,-0.9 -0.6,-0.9l3.2,-0.1c-0.5,-1.8 -1.1,-3.2 -2,-3.3c0.2,-0.4 0.5,-0.6 0.8,-0.9l-2.5,0c0.2,-1.3 3.5,-0.9 4.9,-0.7c1.4,7.2 4.2,17 4.3,17.1c0.1,0.1 2.4,1 2.6,1.1c1.3,-2.9 3.4,-11.5 3.5,-13.6c1.7,0.6 1.1,2.8 0.7,5.1c-1.9,11.7 -3.5,15.3 -3.8,17.5c1.7,-0.4 2.6,-0.7 2.9,-0.9c0.2,-0.4 1,-2.3 1.7,-4.5c1,-3.2 2.5,-11.2 2.5,-14.4c0,-0.7 -0.7,-1.6 -1.8,-2.1c0,0 0.6,-1 0.8,-1.7c0.4,-0.7 0.7,-2.2 0.7,-2.2c0.7,0.2 1.2,0.5 1.3,1.2c0.4,3.1 0.2,3.3 -0.2,9c0,1.7 -0.7,5.4 -1.3,9.2c-1.2,6.8 -2.4,9.8 -2.4,10.9c1.8,-0.6 3.2,-1.1 3.4,-1.3c0.1,-0.2 1.4,-3.5 2.4,-8.6c0.4,-2.2 0.6,-4.3 1,-6.5c0.5,-2.9 0.6,-6 0.6,-8.4c0,-3.7 0.5,-3.7 -2.3,-5.1c1.1,-2.9 0.8,-4.9 0.6,-5.5c-0.5,-1 -1,-1 -3.4,-0.9c0.8,0.9 0.6,2.4 0.4,3.4c-0.5,-0.4 -0.2,-1.1 -2.8,-1c-0.4,-4.2 -1.2,-4.6 -1.2,-4.8c-0.4,-0.5 -2.5,-0.2 -3.1,0c0.5,0.4 1.4,3.5 1,4.9c-0.2,-0.4 -3.8,-4.5 -3.6,-5.3c0.2,-0.5 0.5,-1 1.7,-2.4c4.2,0.9 11.3,3.5 11.8,4.3c0.4,1 0.8,2.1 1.1,3.7c0.4,2.4 1.1,8.1 0.7,16.7c-0.4,9 -1.6,14 -1.4,13.8c1.3,-0.4 3.4,-2.4 3.6,-2.9c0.6,-1.5 0.8,-6.7 1,-11.5c-0.1,-4.7 -0.6,-10.7 -0.8,-13c-0.7,-5.6 -1.1,-7.1 -1.8,-8.3zm-32.2,37.4c-1.3,0 -3.2,-0.2 -3.2,-0.2l3.2,-9.5l3,9.5c0,-0.1 -1.8,0.2 -3,0.2zm16.1,-0.3c0,0 -1.9,0.2 -3.2,0.2c-1.1,0 -3,-0.2 -3,-0.2l3,-9.5l3.2,9.5zm-8.3,-7.3l0,-3.7l2.8,0l-4.2,11.8l-4.2,-11.7l2.8,0l0,2.6c0,0 0,0.2 0.1,0.2c0.4,0.2 0.5,0.2 0.5,0.2l2.2,0.6zm0.3,-19.3l-4.8,0c-0.4,-1.2 0,-1.5 1.1,-1.6c1.9,-0.1 3.6,-0.1 3.7,1.6zm13.7,-5.2c1.7,-0.2 1,2.9 0.5,4.2c-0.7,-1.5 -1.2,-2.4 -2.3,-3.8c0.6,-0.3 1.1,-0.3 1.8,-0.4z" />
                  <path d="m15.3,43.1c0.8,-1 3.8,-4 4.3,-5.7c0.5,-2 1,-6.8 1,-7.9c0,0 -3,2.1 -4.5,3.7c-0.7,0.7 -1.6,2 -1.6,2c-0.4,-1.7 0.1,-3.7 0.8,-4.8c1,-1.7 4.6,-4.8 5.1,-6.1c0.8,-2.1 0.7,-3.9 1.3,-6.1c-2.4,0.9 -5.4,2.7 -6.9,4.3c-0.1,-2.4 0.6,-4.2 2.2,-5.4c2.3,-1.8 5.4,-2.8 7.3,-3.4c1.7,-0.5 4.5,-1 5.8,-1.7c2.5,-1.2 4.9,-4.8 5.5,-6.6c-0.8,0 -3.8,-0.1 -6.7,1c-1.1,0.5 -1.6,1.5 -2,2.3c-0.5,0.7 -1,1.5 -1.4,2.1c-1.2,1.8 -2.6,2.7 -4.4,3.2c0,-0.1 1.2,-0.9 2,-2.7c0.7,-1.6 1.6,-4.6 1.6,-4.9c-1.6,0.2 -2.5,0.7 -4.2,1.3c-1.7,0.7 -2.3,1.5 -2.6,2.2c-1.2,1.8 -0.8,7 -3.2,8.9c0.1,-2.7 0.7,-5.6 -0.2,-8.9c-4.8,2 -5.8,3.7 -5.4,5.7c0.5,2.8 3.5,4 4.8,6.4c0.5,0.7 0.6,1.7 0.6,1.7c0.1,0 -1,1.3 -0.6,4c0,0 -1,-2 -1.9,-3.2c-1.4,-1.8 -4.2,-4.8 -4.2,-4.8c-0.6,7.5 0.4,9 0.7,9.6c1,1.6 4.4,4 5.2,5.6c0.4,0.7 0.5,1 0.5,1c0.1,0.2 -0.7,1.2 -0.6,2.6c0.1,0.5 0.2,1 0.4,1.7c0,0 -1.1,-1.6 -2.5,-3.2c-1.2,-1.5 -3.7,-3.3 -3.8,-3.3c-0.1,0.9 0.4,5 0.5,5.7c0.2,2.1 0.4,4 2.2,5.9c1.4,1.5 6.3,3.5 7.3,3.9c0,0 -0.2,-1 -0.7,-2.3c-0.9,-1.5 -1.7,-3.8 -1.7,-3.8z" />
                </svg>
              </div>
            </div>

            {/* Document Typing Area */}
            <div className={heroTypewriterStyles.docCanvas}>
              <Shield className={heroTypewriterStyles.watermarkShield} />

              <div className={heroTypewriterStyles.contentWrapper}>
                <span>{displayText}</span>
                <span className={heroTypewriterStyles.cursor} />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Metallic Hinge */}
        <div className={heroTypewriterStyles.hinge} />

        {/* 3. Laptop Base Chassis & Keyboard */}
        <div className={heroTypewriterStyles.baseDeck}>
          {/* Keyboard Grid */}
          <div className={heroTypewriterStyles.keyboardGrid}>
            {KEY_ROWS.map((row, rowIdx) => (
              <div key={rowIdx} className={heroTypewriterStyles.keyRow}>
                {row.map((key, keyIdx) => {
                  const isSpace = key === "SPACE";
                  const isThisKeyActive = activeKey === key;

                  return (
                    <div
                      key={keyIdx}
                      className={` ${heroTypewriterStyles.keycap} ${isSpace ? heroTypewriterStyles.spacebar : ""} ${isThisKeyActive ? heroTypewriterStyles.keycapActive : ""} `}
                    >
                      {key}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Trackpad */}
          <div className={heroTypewriterStyles.trackpad} />

          {/* Front Notch */}
          <div className={heroTypewriterStyles.baseFrontLip} />
        </div>
      </div>
    </div>
  );
});
