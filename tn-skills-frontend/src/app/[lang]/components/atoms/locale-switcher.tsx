"use client"

import { usePathname } from "next/navigation"
import { i18n, Locale } from "../../../../../i18n-config"
import { useTheme } from "@/src/context/Theme"
import styles from './styles/locale-switcher.module.css'

export default function LocaleSwitcher() {
  const { theme } = useTheme();

  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    localStorage.setItem('locale', locale);

    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className={ theme == 'dark' ? `${styles.LocaleSwitcher} ${styles.Dark}` : styles.LocaleSwitcher }>
      <select
        className={ theme == 'dark' ? `${styles.Select} ${styles.Dark}` : styles.Select}
        defaultValue={pathName.split('/')[1]}
        onChange={(e) => window.location.href = redirectedPathName(e.target.value as Locale)}
        >
        {i18n.locales.map((locale) => {
          return (
            <option key={locale} value={locale}>
              {locale}
            </option>
          );
        })}
      </select>
    </div>
  );
}
