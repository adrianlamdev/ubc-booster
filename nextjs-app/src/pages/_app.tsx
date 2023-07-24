// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Component {...pageProps} />
      <Analytics />
    </NextUIProvider>
  );
}

export default MyApp;
