---
name: tax-fintech
description: >-
  Identidad de marca, directrices de negocio y estándares de diseño para Intitax (FinTech / Servicios Fiscales y Contables).
  Define la paleta oficial Modern FinTech Blue, tratamiento de datos numéricos con fuentes tabulares, señales de confianza y estructura de conversión.
---

# Identidad y Reglas de Negocio - Intitax (Tax FinTech)

## 1. Perfil del Producto e Industria

- **Nombre de Marca:** Intitax
- **Industria:** Finance / Tax Preparation, Accounting & Fiscal Advisory (FinTech)
- **Estilo Visual:** _Minimalism & Modern Swiss Style_ con toques de _Bento Grid_ y superficies con desenfoque suave (_backdrop-blur_).
- **Arquetipo de Marca:** Confianza, precisión matemática, seguridad institucional, transparencia y rapidez.
- **Público Objetivo:** Personas físicas y empresas que buscan maximizar deducciones, regularizar su situación fiscal y presentar impuestos de forma ágil y segura.

---

## 2. Paleta Oficial de Colores (Intitax Sol & Charcoal)

Los colores están configurados mediante **Tokens Semánticos** en `src/app/globals.css` para soportar Modo Claro y Modo Oscuro automáticamente:

### ☀️ Modo Claro (Default):

- **Primary (Naranja Inti / CTA Principal):** `#F18A0E` (Naranja Inti Sol)
- **Primary Foreground (Texto sobre CTA):** `#FFFFFF`
- **Accent Hover (Interacción / Hover):** `#F2A35E` (Naranja Medio)
- **Secondary (Acción Secundaria / Badges):** `#F2CDAC` (Crema / Arena Suave)
- **Secondary Foreground:** `#3A3C40`
- **Background (Fondo General):** `#FFFFFF` (Blanco puro)
- **Foreground (Texto Principal):** `#3A3C40` (Gris Carbón Intitax)
- **Card (Superficies de Tarjetas):** `#FFFFFF`
- **Card Foreground:** `#3A3C40`
- **Muted (Fondos sutiles):** `#F2F2F2` (Gris Claro)
- **Muted Foreground (Subtítulos):** `#64748B`
- **Border (Bordes sutiles):** `#E8EAED`
- **Accent Success (Reembolsos / Ahorro):** `#059669` (Verde Esmeralda)

### 🌙 Modo Oscuro:

- **Primary (Naranja Inti / CTA):** `#F18A0E`
- **Primary Foreground:** `#FFFFFF`
- **Accent Hover:** `#F2A35E`
- **Secondary:** `#3A3C40`
- **Secondary Foreground:** `#F2F2F2`
- **Background:** `#141618` (Gris noche profundo)
- **Foreground:** `#F2F2F2` (Gris Claro)
- **Card:** `#222529` (Superficies elevadas)
- **Card Foreground:** `#F2F2F2`
- **Muted:** `#2A2D32`
- **Muted Foreground:** `#9CA3AF`
- **Border:** `#3A3C40`
- **Accent Success:** `#10B981`

---

## 3. Tipografía y Tratamiento de Datos

- **Fuente Principal:** `IBM Plex Sans` / `Inter` (Sans-serif limpia, seria y legible).
- **Titulares:** Peso _Bold_ / _Black_ con espaciado tracking estrecho (`tracking-tight`).
- **Números y Datos Fiscales:** Uso obligatorio de cifras monoespaciadas y tabulares (`font-mono tabular-nums`) para precios, cálculos de impuestos y porcentajes de ahorro.

---

## 4. Iconografía, Banderas y Componentes UI

- **Librería Oficial de Iconos:** `lucide-react` con trazo uniforme (`strokeWidth={1.75}`).
- **Banderas e Idiomas:** Uso OBLIGATORIO de componentes vectoriales SVG dedicados (`FlagIcons.tsx` con `SpainFlag` y `UsaFlag`). Prohibido usar emojis de banderas para evitar que Windows renderice texto plano 'ES'/'US'.
- **Prohibición Estricta:** Cero emojis usados como iconos decorativos, funcionales o banderas.
- **Sistema de Botones Globales:**
  - _Primario:_ `bg-primary text-primary-foreground hover:bg-primary/90`
  - _Secundario:_ `bg-secondary text-secondary-foreground hover:bg-secondary/80`
  - _Outline:_ `border border-border text-foreground hover:bg-muted`
  - _Ghost:_ `text-foreground hover:bg-muted`

---

## 5. Señales de Confianza Obligatorias (Trust Architecture)

Toda vista o sección comercial debe incorporar señales tangibles de seguridad:

- Insignia de encriptación (256-bit SSL / Datos protegidos).
- Respaldo de asesores contables certificados.
- Garantía de cálculo fiscal 100% exacto.
- Soporte humano directo vía WhatsApp o llamada.

---

## 6. Pre-Delivery Quality Checklist

Antes de entregar cualquier pantalla o componente:

- [ ] Sin emojis como iconos ni banderas (100% SVGs dedicados y Lucide).
- [ ] `cursor-pointer` en todos los elementos interactivos.
- [ ] Contraste de texto mínimo **4.5:1** (WCAG AA) en ambos modos.
- [ ] Estados de foco accesibles (`focus-visible:ring-2 focus-visible:ring-primary`).
- [ ] Totalmente responsive verificado en 375px, 768px, 1024px y 1440px.
- [ ] Hero visual dinámico y limpio (animación tipográfica o interactiva de alto impacto).
- [ ] Catálogo de servicios en Bento Box Grid asimétrico (2x2, 2x1, 1x1).
- [ ] Widget flotante de conversión directa para agendar cita o llamada en 1 clic.
- [ ] Política de Cero Código Muerto aplicada (sin componentes, carpetas o textos huérfanos).
