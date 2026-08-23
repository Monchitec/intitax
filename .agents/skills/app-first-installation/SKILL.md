---
name: next-project-implementation
description: Crea e implementa aplicaciones web nuevas con Next.js, React, TypeScript, Tailwind CSS, ESLint, Prettier y pnpm. Usar para preparar el proyecto e implementar rutas, componentes, interfaces, formularios, estado e integración de datos.
---

# Implementación con Next.js

## Alcance

- Crear proyectos nuevos con Next.js y pnpm.
- Configurar TypeScript, Tailwind, ESLint y Prettier.
- Implementar la funcionalidad solicitada hasta dejarla integrada en la aplicación.

## Entorno

- Validar que Node.js y pnpm estén instalados ejecutando `node --version` y `pnpm --version`.
- Si Node.js no está instalado, instalar una versión LTS compatible usando el método oficial disponible para el sistema operativo.
- Si pnpm no está instalado, instalarlo y volver a validar.
- Reiniciar la terminal si una instalación lo requiere.
- Si Node.js o pnpm existen pero su versión no es compatible, informar la versión detectada y solicitar aprobación antes de actualizarla.
- Usar pnpm para todas las instalaciones y scripts del proyecto.

## Crear el proyecto

- Verificar que el nombre y la ubicación del proyecto no sobrescriban una carpeta existente.
- Ejecutar:

```bash
pnpm create next-app@latest <nombre-proyecto>
```

- Si aparece una opción equivalente a esta, seleccionar `Yes`:

```text
Yes, use recommended defaults - TypeScript, ESLint, Tailwind CSS, App Router, AGENTS.md
```

- Conservar y seguir las instrucciones de `AGENTS.md`.

Si el instalador muestra opciones individuales, responder:

- TypeScript: `Yes`
- Linter: `ESLint`
- React Compiler: `Yes`
- Tailwind CSS: `Yes`
- Directorio `src/`: `Yes`
- App Router: `Yes`
- Alias de importación: `@/*`

## Prettier

Instalar Prettier después de crear el proyecto:

```bash
pnpm add -D prettier eslint-config-prettier prettier-plugin-tailwindcss
```

Crear `prettier.config.mjs`:

```js
export default {
  plugins: ["prettier-plugin-tailwindcss"],
};
```

Crear `.prettierignore`:

```text
.next
node_modules
coverage
pnpm-lock.yaml
```

- Revisar la configuración de ESLint generada.
- Añadir `eslint-config-prettier` al final para desactivar reglas de formato que entren en conflicto con Prettier.
- No usar `eslint-plugin-prettier`.
- Asegurar estos scripts en `package.json`:

```json
{
  "lint": "eslint .",
  "format": "prettier --write .",
  "format:check": "prettier --check ."
}
```

## Implementación

- Leer `package.json`, la configuración generada y `AGENTS.md` antes de implementar.
- Crear rutas, layouts, componentes, tipos, estilos y lógica necesarios.
- Usar TypeScript y evitar `any` y conversiones inseguras.
- Usar Tailwind para los estilos y mantener una interfaz responsive.
- Preferir Server Components.
- Usar `"use client"` solo cuando el componente necesite estado, efectos, eventos del navegador o APIs del cliente.
- Mantener los componentes cohesionados y extraer código solo cuando reduzca complejidad o duplicación real.
- Usar HTML semántico, etiquetas correctas y controles utilizables con teclado.
- Incluir estados de carga, error y vacío para datos asíncronos.
- Reutilizar componentes, tipos y utilidades existentes cuando tengan el propósito adecuado.
- Instalar dependencias adicionales solo cuando una funcionalidad concreta lo requiera.
- Preferir APIs nativas, React, Next.js y dependencias existentes antes de añadir un paquete.

## Límites

- Mantener los cambios enfocados en la funcionalidad solicitada.
- No modificar archivos no relacionados.
- No hacer refactors amplios ni cambios arquitectónicos sin aprobación.
- No instalar varias librerías para resolver el mismo problema.

## Entrega

- Resumir lo implementado.
- Indicar los archivos modificados y las dependencias agregadas.
- Ejecutar `pnpm lint` y `pnpm format:check` cuando corresponda.
