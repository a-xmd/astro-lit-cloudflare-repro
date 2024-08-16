import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [lit()]
});