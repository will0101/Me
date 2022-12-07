import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), compress(), image()],
  site: "https://www.williambogans.dev",
  output: "server",
  adapter: netlify()
});