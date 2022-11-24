import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PortfolioProvider } from "../src/providers/Chakra";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PortfolioProvider>
      <Component {...pageProps} />
    </PortfolioProvider>
  );
}
