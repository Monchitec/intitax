---
name: seo-standards
description: >-
  Estándares de SEO técnico, metadatos, datos estructurados (Schema.org JSON-LD),
  indexación y palabras clave para Intitax en Next.js (App Router). Rige la configuración de
  layout.tsx, sitemap.ts, robots.ts, Open Graph e indexación bilingüe.
---

# Estándares de SEO Técnico y de Contenido - Intitax

Este documento define la arquitectura y reglas obligatorias de SEO para el proyecto **Intitax** en Next.js (App Router).

---

## 1. Arquitectura de SEO en Next.js

El SEO se implementa mediante componentes nativos del App Router sin librerías externas pesadas:

```
src/app/
├── layout.tsx       # Metadatos globales, keywords, Open Graph y Schema.org JSON-LD
├── sitemap.ts       # Generador automático de /sitemap.xml para Google
├── robots.ts        # Reglas de rastreo de /robots.txt
└── [ruta]/page.tsx  # Metadatos específicos por página (title, description)
```

---

## 2. Metadatos Globales (`src/app/layout.tsx`)

### Plantilla de Título y Descripción:
- **Título Base:** `Intitax | Preparación de Impuestos Federales y Estatales en EE.UU.`
- **Formato Dinámico:** `%s | Intitax` (ejemplo: `Servicios de Impuestos | Intitax`).
- **Descripción:** Clara, concisa y orientada a la acción, mencionando los formularios principales (*Form 1040, Schedule C, W-7 ITIN, Enmiendas 1040-X*).

### Banco Oficial de Palabras Clave (Keywords):
1. `taxes en español`
2. `preparación de impuestos personales`
3. `declaración de taxes 1040`
4. `taxes para independientes 1099`
5. `schedule c taxes`
6. `tramitar itin w7`
7. `renovar itin`
8. `cartas del irs`
9. `enmiendas de taxes 1040x`
10. `tax preparer en español`
11. `reembolso irs maximo`
12. `personal tax return usa`
13. `federal and state tax return`
14. `intitax`

---

## 3. Datos Estructurados Schema.org (`JSON-LD`)

Se inyecta en el `<head>` de `src/app/layout.tsx` como un script `application/ld+json`.

- **Tipo:** `AccountingService` / `ProfessionalService`
- **Nombre:** `Intitax`
- **Email:** `mcollahua@intitax.com`
- **Área de Cobertura:** `United States`
- **Idiomas:** `["es", "en"]`
- **Catálogo de Ofertas (`hasOfferCatalog`):**
  - Preparación de Impuestos Personales (Form 1040)
  - Schedule C para Independientes y 1099
  - Tramitación y Renovación de ITIN (Form W-7)
  - Asistencia con Cartas y Notificaciones del IRS
  - Declaraciones Enmendadas (Form 1040-X)

---

## 4. Mapa del Sitio (`src/app/sitemap.ts`)

Define la prioridad y frecuencia de rastreo para los robots de búsqueda:

| Ruta | `changeFrequency` | `priority` | Justificación |
| :--- | :---: | :---: | :--- |
| `/` | `weekly` | `1.0` | Puerta principal de entrada; máxima relevancia. |
| `/servicios` | `weekly` | `0.9` | Catálogo detallado de servicios y beneficios. |
| `/contacto` | `monthly` | `0.8` | Información de contacto estable y preguntas frecuentes. |

---

## 5. Reglas de Rastreo (`src/app/robots.ts`)

- **User Agent:** `*` (todos los buscadores autorizados).
- **Allow:** `/` (acceso a todas las páginas públicas).
- **Sitemap:** `https://intitax.com/sitemap.xml`.

---

## 6. Open Graph & Redes Sociales

- **Imagen por defecto:** `/logo-clean.png` (o `og-image.png` de 1200x630px).
- **Locale:** `es_US`.
- **Tipo:** `website`.
- **Compatibilidad:** WhatsApp, Facebook, LinkedIn, Twitter/X Card (`summary_large_image`).

---

## 7. Reglas para Nuevas Páginas

Al crear una nueva ruta en `src/app/[nueva-ruta]/page.tsx`:
1. **Exportar `metadata`:** Incluir `title` descriptivo y `description` con palabras clave.
2. **Actualizar `sitemap.ts`:** Agregar la nueva URL con su correspondiente `changeFrequency` y `priority`.
3. **Encabezados H1/H2:** Usar solo un `H1` por página con la palabra clave principal de la ruta.
