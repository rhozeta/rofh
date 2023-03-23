import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import App from "next/app";
import Head from 'next/head';

import { useEffect } from "react";
import { useRouter } from "next/router";



function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events])
  return (
    <>

    <Head>
          <link rel="shortcut icon" href="/img/favicon.ico" />
        
</Head>
 
<Component {...pageProps} />
</>
  ) 

}



export default MyApp;