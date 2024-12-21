import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      clientId="a2f8340fb68898067ea17f4edf137c67"
      activeChain={Sepolia}
      authConfig={{
        domain: "localhost:3000",
        authUrl: "/api/auth",
      }}
    >
      <div className={styles.main_layout}>
        <Component {...pageProps} />
      </div>
    </ThirdwebProvider>
  );
}

export default MyApp;
