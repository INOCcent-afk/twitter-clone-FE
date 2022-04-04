import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black text-white">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
