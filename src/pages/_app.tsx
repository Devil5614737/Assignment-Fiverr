import type { AppProps } from "next/app";
import * as GlobalStyles from "@/styles/GlobalStyles";
import { Inter } from "@next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const { GlobalStyle } = GlobalStyles;
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
