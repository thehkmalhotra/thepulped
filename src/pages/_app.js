import { SearchProvider } from "@/context/SearchContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <SearchProvider>
    <Component {...pageProps} />
  </SearchProvider>}