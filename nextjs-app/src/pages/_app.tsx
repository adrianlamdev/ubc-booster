// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // 2. Use at the root of your app
    <CookiesProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </CookiesProvider>
  );
}

export default MyApp;
