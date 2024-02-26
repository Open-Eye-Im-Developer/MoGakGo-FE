import { Toaster as Sonner } from "sonner";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import "./globals.css";

import { Toaster } from "./_common/shadcn/ui/toaster";
import { ThemeProvider } from "./_common/components/theme-provider";
import ClientProvider from "./_common/components/ClientProvider";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

dayjs.locale("ko");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true}>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff" />
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
            <Sonner richColors position="bottom-center" />
          </ThemeProvider>
        </ClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
