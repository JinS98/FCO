import { Global } from "@emotion/react";
import { globalStyles } from "../src/component/commons/styles/globalStyles.ts";


function MyApp({ Component, pageProps }) {
  return(
    <>
    <Global styles={globalStyles} />
      <Component {...pageProps} />
  </>
    
  ) 
}

export default MyApp
