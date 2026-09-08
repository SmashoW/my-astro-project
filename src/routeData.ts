// src/routeData.ts
import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware((context) => {
  // Указываем, что клик по заголовку должен вести на /docs/
  context.locals.starlightRoute.siteTitleHref = "/docs/";
});
