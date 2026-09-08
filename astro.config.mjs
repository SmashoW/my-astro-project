// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      routeMiddleware: "./src/routeData.ts",
      title: "Documentation",
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          label: "Components",
          // Пишем как в старом рабочем проекте:
          items: [{ autogenerate: { directory: "docs/components" } }],
        },
      ],
    }),
  ],
  vite: {
    plugins: [],
  },
});
