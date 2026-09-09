// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Necesario para las vistas previas de WhatsApp: la imagen tiene que
  // anunciarse con su dirección completa, no relativa.
  site: 'https://boda-richie-y-alexandra-2026.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});