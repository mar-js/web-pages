# Web Pages

Web Pages es un sitio de presentación de proyectos frontend. Reúne distintas páginas web independientes en una sola aplicación para mostrar ejemplos de maquetado, diseño responsive y desarrollo de interfaces.

Cada proyecto tiene su propia ruta y conserva una estructura modular de componentes y layouts. Las imágenes, iconos y demás archivos públicos que utiliza la aplicación están en `public/assets/`.

## Proyectos

Desde la página de inicio (`/`) se puede acceder a estos ejemplos:

| Proyecto | Ruta |
| --- | --- |
| Base Apparel Coming Soon | `/pages/base-apparel-coming-soon` |
| Bookmark Landing Page | `/pages/bookmark-landing-page` |
| Slow House — Interior Design | `/pages/slow-living-interiors` |
| Clipboard Landing Page | `/pages/clipboard-landing-page` |
| Crowdfunding Product Page | `/pages/crowdfunding-product-page` |
| Digital Bank Landing Page | `/pages/digitalbank-landing-page` |
| Fylo Dark Landing Page | `/pages/fylo-dark-landing-page` |
| Forma Studio — Creative Studio | `/pages/creative-studio` |
| Grid Landing Page | `/pages/grid-landing-page` |
| Hotel Booking Confirmation Page | `/pages/hotel-booking-confirmation-page` |
| Huddle Landing Page | `/pages/huddle-landing-page` |
| Insure Landing Page | `/pages/insure-landing-page` |
| Loopstudios Landing Page | `/pages/loopstudios-landing-page` |
| Manage Landing Page | `/pages/manage-landing-page` |
| News Homepage | `/pages/news-homepage` |
| Notifications Page | `/pages/notifications-page` |
| Ping Coming Soon Landing Page | `/pages/ping-coming-soon-landing-page` |
| Recipe Page | `/pages/recipe-page` |
| Room Homepage | `/pages/room-homepage` |
| Ruta Escapes — Nature Getaways | `/pages/nature-escapes` |
| Space Tourism Website | `/pages/space-tourism-website` |
| URL Shortening API | `/pages/url-shortening-api` |

Pages include interface interactions such as responsive menus, forms, tabs, accordions, navigation controls, and confirmation states. These are frontend demonstrations; actions that require an external service are not presented as real backend operations.

## Tecnologías

- React
- TypeScript
- Vite
- Tailwind CSS 4
- Wouter para el enrutamiento

## Requisitos

- Node.js y npm, o Bun.

## Desarrollo

Instala las dependencias:

```bash
npm install
```

O, si usas Bun:

```bash
bun install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Con Bun:

```bash
bun run dev
```

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia Vite en modo desarrollo. |
| `npm run build` | Ejecuta la verificación de TypeScript y genera la compilación de producción. |
| `npm run preview` | Sirve localmente la compilación para previsualizarla. |
| `npm run lint` | Ejecuta ESLint sobre el proyecto. |

## Estructura

```text
public/assets/  Imágenes, iconos y otros recursos usados por las páginas
src/
  constants/    Datos y rutas de assets compartidos por las páginas
  global/       Estilos, interfaces y componentes globales
  pages/        Una carpeta por página, organizada en components/ y layouts/
  routes.tsx    Registro de rutas de la aplicación
```
