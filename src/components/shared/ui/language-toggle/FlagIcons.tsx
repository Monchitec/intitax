import * as React from "react";

export function SpainFlag({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 750 500"
      className={`${className} shrink-0 overflow-hidden rounded-[2px] shadow-sm`}
      aria-hidden="true"
    >
      <rect width="750" height="500" fill="#AA151B" />
      <rect y="125" width="750" height="250" fill="#F1BF00" />
      <g transform="translate(180, 250) scale(0.7)">
        {/* Escudo simplificado elegante */}
        <path
          d="M-40,-60 L40,-60 L40,20 C40,60 -40,60 -40,20 Z"
          fill="#AA151B"
          stroke="#F1BF00"
          strokeWidth="6"
        />
        <circle cx="0" cy="-70" r="14" fill="#F1BF00" />
      </g>
    </svg>
  );
}

export function UsaFlag({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 7410 3900"
      className={`${className} shrink-0 overflow-hidden rounded-[2px] shadow-sm`}
      aria-hidden="true"
    >
      <rect width="7410" height="3900" fill="#B22234" />
      <path
        d="M0,300H7410M0,900H7410M0,1500H7410M0,2100H7410M0,2700H7410M0,3300H7410"
        stroke="#FFFFFF"
        strokeWidth="300"
      />
      <rect width="2964" height="2100" fill="#3C3B6E" />
      {/* Estrellas representativas */}
      <g fill="#FFFFFF">
        <circle cx="500" cy="400" r="120" />
        <circle cx="1000" cy="400" r="120" />
        <circle cx="1500" cy="400" r="120" />
        <circle cx="2000" cy="400" r="120" />
        <circle cx="2500" cy="400" r="120" />
        <circle cx="750" cy="800" r="120" />
        <circle cx="1250" cy="800" r="120" />
        <circle cx="1750" cy="800" r="120" />
        <circle cx="2250" cy="800" r="120" />
        <circle cx="500" cy="1200" r="120" />
        <circle cx="1000" cy="1200" r="120" />
        <circle cx="1500" cy="1200" r="120" />
        <circle cx="2000" cy="1200" r="120" />
        <circle cx="2500" cy="1200" r="120" />
        <circle cx="750" cy="1600" r="120" />
        <circle cx="1250" cy="1600" r="120" />
        <circle cx="1750" cy="1600" r="120" />
        <circle cx="2250" cy="1600" r="120" />
      </g>
    </svg>
  );
}
