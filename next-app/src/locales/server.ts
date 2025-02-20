import { createI18nServer } from "next-international/server";
import { importedLocales } from "./config";

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer(importedLocales);
