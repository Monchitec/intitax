---
name: app-architecture
description: >-
  Estándares de arquitectura modular para la aplicación en Next.js (App Router).
  Rige la separación estricta de JSX y estilos Tailwind (.styles.ts), organización espejo entre rutas (src/app) y componentes (src/components/pages/ y src/components/shared/),
  uso de tokens semánticos globales (globals.css), sistema de botones globales adaptables a modo claro/oscuro, ThemeProvider, soporte bilingüe (i18n ES/EN) y buenas prácticas de rendimiento.
---

# Arquitectura de la Aplicación

## 1. Principio Fundamental: Separación de Lógica y Estilos

Cada componente debe mantener separada su estructura semántica de sus clases de diseño:

- **`Componente.tsx`**: Estructura semántica JSX, imports, estado React y lógica de interacción.
- **`Componente.styles.ts`**: Objeto exportado con las clases Tailwind CSS organizadas por cada elemento visual (ej: `header`, `container`, `title`, `button`, `navLink`).
- **`index.ts`**: Exportación limpia del componente (`export * from './Componente'`).

---

## 2. Tokens Semánticos Globales y Modo Oscuro

En los archivos `.styles.ts` **no** se usan colores fijos hardcodeados (evitar `bg-blue-600` o `dark:bg-slate-900`).
Se utilizan siempre los **Tokens Semánticos globales definidos en `src/app/globals.css`**:

### Tokens de Superficie y Texto:

- `bg-background` / `text-foreground` 👉 Fondo y texto principal de la aplicación (cambia automáticamente en claro/oscuro).
- `bg-card` / `text-card-foreground` 👉 Superficies de tarjetas, cajas y modales.
- `text-muted-foreground` / `bg-muted` 👉 Textos secundarios, subtítulos y fondos tenues.
- `border-border` 👉 Bordes adaptativos que combinan con el modo activo.

### Sistema de Botones Globales (`src/components/shared/ui/button/`):

Todos los botones de la aplicación consumen los tokens globales y se adaptan solos al alternar el tema:

- **Primario (Acción Principal / CTA):** `bg-primary text-primary-foreground hover:bg-primary/90`
- **Secundario (Acción Secundaria):** `bg-secondary text-secondary-foreground hover:bg-secondary/80`
- **Outline (Con Borde):** `border border-border text-foreground hover:bg-muted`
- **Ghost (Sin Fondo):** `text-foreground hover:bg-muted`

---

## 3. Estructura de Directorios Definitiva (`src/`)

```text
src/
├── app/                          # ENRUTAMIENTO Y SHELL GLOBAL (Organizado en Route Groups)
│   ├── globals.css               # Tokens de color globales Claro / Oscuro (:root y .dark)
│   ├── layout.tsx                # Shell raíz obligatorio: SOLO <html>, <body>, fuentes, ThemeProvider y LanguageProvider
│   │
│   ├── (sitio)/                  # 🌐 PÁGINA WEB PÚBLICA (Marketing / Informativa)
│   │   ├── layout.tsx            # Inyecta <Navbar /> + {children} + <Footer /> (exclusivo para la web pública)
│   │   ├── page.tsx              # Ruta Home (/) -> Ensambla <HeroSection />, <WhyUsSection />, <CtaSection />
│   │   ├── agendar/page.tsx      # Ruta /agendar -> Ensambla <ContactContent />
│   │   ├── contacto/page.tsx     # Ruta /contacto -> Ensambla <ContactContent />
│   │   └── servicios/page.tsx    # Ruta /servicios -> Ensambla <ServicesSection /> y <CtaSection />
│   │
│   └── (portal)/                 # 💻 PORTAL DE GESTIÓN / CLIENTES (Módulos interactivos futuros)
│       ├── layout.tsx            # Layout con contenedor independiente (preparado para <Sidebar />, sin footer)
│       └── portal/page.tsx       # Ruta /portal -> Dashboard / Inicio del portal
│
├── components/                   # TODOS LOS COMPONENTES VISUALES
│   │
│   ├── shared/                   # Componentes universales del sistema (atómicos / globales)
│   │   ├── ui/                   # Botones (Button), Switch de tema (ThemeToggle), Switch de idioma (LanguageToggle)
│   │   └── providers/            # ThemeProvider.tsx y LanguageProvider.tsx
│   │
│   ├── sitio/                    # 🌐 Componentes visuales y módulos de la Página Web Pública
│   │   ├── navigation/           # Navbar.tsx + Navbar.styles.ts, Footer.tsx + Footer.styles.ts
│   │   ├── home/                 # hero/, why-us/, cta/ (+ .styles.ts)
│   │   ├── contacto/             # ContactContent.tsx + ContactContent.styles.ts
│   │   ├── servicios/            # ServicesSection.tsx + ServicesSection.styles.ts
│   │   └── agendar/              # Sub-componentes específicos de agendar
│   │
│   └── portal/                   # 💻 Componentes visuales exclusivos del Portal de Gestión
│       ├── layout/               # Sidebar.tsx + Sidebar.styles.ts, PortalHeader.tsx
│       ├── citas/                # Gestor interactivo de citas (+ .styles.ts)
│       └── documentos/           # Subida y gestión de documentos (+ .styles.ts)
│
├── i18n/                         # DICCIONARIOS DE IDIOMA (Bilingüe ES / EN)
│   ├── es.ts                     # Textos y traducciones en Español
│   ├── en.ts                     # Textos y traducciones en Inglés
│   ├── types.ts                  # Interfaces TypeScript para tipado estricto de textos
│   └── index.ts                  # Configuración y hook de traducciones
│
└── lib/                          # UTILIDADES GLOBALES
    └── utils.ts                  # Utilidad helper cn() para combinación de clases Tailwind
```

---

## 4. Reglas de Next.js y Rendimiento

1. **Simetría y Puntos de Entrada:**
   - Todo archivo `src/app/**/page.tsx` debe ser liviano (10 a 20 líneas). Solo define Metadata SEO y renderiza los componentes desde `@/components/sitio/...` o `@/components/portal/...`.
   - Ninguna lógica pesada, formularios extensos ni estilos masivos deben residir directamente en `src/app/`.
2. **Server vs Client Components:**
   - Las páginas (`page.tsx`) y componentes estáticos se mantienen como **Server Components** por defecto (mejor SEO y velocidad).
   - Agregar `"use client"` únicamente en componentes interactivos que usen estado (`useState`), eventos (`onClick`), formularios, menús desplegables, `ThemeToggle` o `LanguageToggle`.
3. **Navegación:** Usar siempre `<Link href="...">` de `next/link` para transiciones instantáneas sin recarga completa.
4. **Imágenes:** Usar siempre `<Image />` de `next/image` para optimización automática de peso y formato.
5. **Imports:** Usar siempre el alias `@/` (ej: `@/components/sitio/navigation` o `@/components/sitio/home`).
6. **Accesibilidad (a11y):** Todo botón o enlace basado exclusivamente en iconos debe incluir su atributo `aria-label` descriptivo.

---

## 5. Sistema de Internacionalización Bilingüe (i18n ES / EN)

1. **Detección Automática por Navegador:**
   - En la primera carga, el sistema detecta el idioma del navegador (`navigator.language`).
   - Si el idioma es español (`es` o `es-*`), la web inicia en Español. Si es inglés u otro, inicia en Inglés.
2. **Switch Manual en Navbar (`LanguageToggle`):**
   - Selector visual interactivo con **Banderas Vectoriales SVG** (`SpainFlag` y `UsaFlag` en `FlagIcons.tsx`).
   - **Prohibición estricta de emojis de banderas:** No usar emojis nativos del sistema operativo (en Windows se renderizan como letras 'ES'/'US' en lugar de banderas gráficas).
   - El cambio de idioma es instantáneo y reactivo a través de `LanguageProvider` (`useLanguage()`).
   - La preferencia elegida se guarda en `localStorage` (`intitax_lang`) para futuras visitas.
3. **Regla de Textos en Componentes:**
   - Prohibido hardcodear textos fijos en un solo idioma dentro de los componentes.
   - Todos los textos de botones, títulos, descripciones y menús deben provenir del diccionario activo (`t.navbar`, `t.hero`, `t.services`, etc.).

---

## 6. Estándar de Landing Page de Alta Conversión (FinTech & UI/UX Pro Max)

Toda Landing Page desarrollada para Intitax debe cumplir obligatoriamente con los siguientes patrones visuales y de interacción:

1. **Prohibición de Diseños Estáticos en el Hero:**
   - Prohibido entregar un Hero con cajas de texto estáticas o imágenes planas sin interacción.
   - El Hero debe incluir un componente interactivo / dinámico (como el carrusel continuo `HeroFormsMarquee` con tipos de formularios, o la ventana simuladora con estado reactivo) con tipografía numérica monoespaciada (`font-mono tabular-nums`).
2. **Layout Bento Box Asimétrico Obligatorio (`bento-box-grid`):**
   - Prohibido usar grids simétricos de columnas idénticas (3x3 planas).
   - Los servicios deben organizarse en un **Bento Grid asimétrico estilo Apple** con tarjetas de tamaños variados (2x2 para el servicio estrella Form 1040, 2x1 y 1x1 con micro-interacciones).
3. **Efecto Glassmorphism & Profundidad Visual (Z-Depth):**
   - Aplicar capas translúcidas con desenfoque de fondo (`backdrop-blur-xl`, `bg-card/80`, `border-border/60`).
   - Integrar resplandores radiales sutiles en esquinas (`bg-primary/15 blur-3xl`) para generar profundidad visual moderna.
4. **Hero Full Viewport Height ("Above the Fold" - 100dvh):**
   - El Hero debe ocupar el 100% de la altura visible del viewport (`min-h-[calc(100dvh-5rem)]` en desktop y `min-h-[calc(100dvh-4.5rem)]` en móvil) con contenido centrado verticalmente (`flex items-center`).

---

## 7. Política de Cero Código Muerto & Limpieza Proactiva (Zero Dead Code)

Para mantener la base de código siempre limpia, ligera y libre de archivos o carpetas huérfanas:

1. **Prohibido mantener código huérfano:** Si una sección, componente o bloque visual deja de utilizarse en las pantallas activas, no debe dejarse comentado ni abandonado en el proyecto.
2. **Confirmación previa obligatoria:** Antes de eliminar definitivamente cualquier componente o archivo existente, se debe consultar/confirmar con el usuario para validar que se descarta por completo.
3. **Limpieza integral en cascada:** Una vez confirmada la eliminación con el usuario, se debe proceder de inmediato a borrar:
   - La carpeta física del componente y todos sus archivos asociados (`.tsx`, `.styles.ts`, `index.ts`).
   - Sus interfaces y diccionarios correspondientes en el sistema i18n (`src/i18n/types.ts`, `src/i18n/es.ts`, `src/i18n/en.ts`).
   - Cualquier import o export huérfano en el resto de la aplicación.
4. **Verificación de build limpia:** Tras cada cambio, ejecutar `pnpm build` para asegurar que el proyecto compila con 0 errores y 0 advertencias.
