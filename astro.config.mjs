// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({ default: true, context: 'server', access: 'secret' }),
      SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public'})
    }
  },

  adapter: netlify()
});