import { AppProps } from "next/app";
//import "../styles/scss/style.scss";
import "../styles/tailwind.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
