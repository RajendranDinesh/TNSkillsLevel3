import type { Metadata } from "next";

import { i18n, type Locale } from "@/i18n-config";
import { ThemeProvider } from "@/src/context/Theme";
import ToastProvider from "@/src/context/toast";

import './styles/global.css'

export const metadata: Metadata = {
  title: "PRd-Starter",
  description: "A starter for PRd's projects",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body style={{ margin: 0 }}>
        <ThemeProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
