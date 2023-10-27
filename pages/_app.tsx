import React from "react";
import { AppProps } from "next/app";
import { StyleProvider, ThemePicker } from "vcc-ui";
import "../public/css/styles.css";
import { CarContextProvider } from "../src/context/CarContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <React.StrictMode>
          <CarContextProvider>
            <Component {...pageProps} />
          </CarContextProvider>
        </React.StrictMode>
      </ThemePicker>
    </StyleProvider>
  );
};

export default MyApp;
