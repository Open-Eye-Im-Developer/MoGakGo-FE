import "./globals.css";

import dayjs from "dayjs";
import "dayjs/locale/ko";

import { generateViewport } from "./_common/utils/generateViewport";
import { Toaster } from "./_common/shadcn/ui/toaster";
import { Toaster as Sonner } from "./_common/shadcn/ui/sonner";
import { WebSocketProvider } from "./_common/components/WebSocketProvider";
import { ThemeProvider } from "./_common/components/theme-provider";
import SVGProvider from "./_common/components/SVGProvider";
import ClientProvider from "./_common/components/ClientProvider";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "모각GO!!",
  description: "게이미피케이션 요소를 적용한 랜덤 모각코 서비스",
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
      <meta property="og:title" content="모각GO!!" />
      <meta
        property="og:description"
        content="게이미피케이션 요소를 적용한 랜덤 모각코 서비스"
      />
      <meta property="og:type" content="engineering.coding" />
      <meta property="og:url" content="https://mogak-go.vercel.app/" />
      <meta property="og:image" content="/thumbnail.png" />
      <body>
        <ClientProvider>
          <WebSocketProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
              <SVGProvider />
              <Sonner
                position="top-center"
                toastOptions={{
                  style: { background: "transparent" },
                  unstyled: true,
                }}
              />
            </ThemeProvider>
          </WebSocketProvider>
        </ClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
