import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), compress()],
  site: "https://www.williambogans.dev",
  output: "server",
});
