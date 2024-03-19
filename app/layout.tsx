import "./globals.css";

import dayjs from "dayjs";
import "dayjs/locale/ko";

import { generateViewport } from "./_common/utils/generateViewport";
import { Toaster } from "./_common/shadcn/ui/toaster";
import { Toaster as Sonner } from "./_common/shadcn/ui/sonner";
import { ThemeProvider } from "./_common/components/theme-provider";
import SVGProvider from "./_common/components/SVGProvider";
import ClientProvider from "./_common/components/ClientProvider";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

dayjs.locale("ko");

export const viewport: Viewport = generateViewport("#ffffff");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true}>
      <link rel="manifest" href="/manifest.json" />
      <body>
        <ClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
            <SVGProvider />
            <Sonner position="bottom-center" />
          </ThemeProvider>
        </ClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
