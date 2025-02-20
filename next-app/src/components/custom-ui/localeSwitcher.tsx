"use client";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import "../../../node_modules/flag-icons/css/flag-icons.min.css";
import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "@/locales/client";
interface ILocaleSwitcherProps {}

export default function LocaleSwitcher({}: ILocaleSwitcherProps) {
  const t = useScopedI18n("locales");
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale({
    preserveSearchParams: true
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full border-none shadow-none"
        >
          <span className={`fi fi-${currentLocale} fis`}></span>{" "}
          {t(currentLocale)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-xl shadow-sm p-2">
        <DropdownMenuLabel className="text-center">Languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {(
          ["fr", "gb", "de", "it", "es"] as ("gb" | "fr" | "es" | "it" | "de")[]
        ).map((locale) => {
          return (
            <DropdownMenuCheckboxItem
              key={locale}
              className="cursor-pointer"
              checked={locale === currentLocale}
              onClick={() => changeLocale(locale)}
            >
              <span className={`fi fi-${locale} fis mr-2`}></span>
              {t(locale)}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
