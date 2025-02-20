export const importedLocales = {
  gb: () => import("./locales/gb"),
  fr: () => import("./locales/fr"),
  es: () => import("./locales/es"),
  it: () => import("./locales/it"),
  de: () => import("./locales/de"),
};

export type Locale = keyof typeof importedLocales;

export const i18nMiddlewareConfig = {
  locales: ["gb", "fr", "it", "es", "de"],
  defaultLocale: "fr",
};
