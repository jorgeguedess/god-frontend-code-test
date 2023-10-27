import React from "react";
import { AppProps } from "next/app";
import { StyleProvider, ThemePicker } from "vcc-ui";
import "../public/css/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <ThemePicker variant="dark">
        <React.StrictMode>
          <Component {...pageProps} />
        </React.StrictMode>
      </ThemePicker>
    </StyleProvider>
  );
}
