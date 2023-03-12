import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import "animate.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faS,
  faChevronDown,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faTwitter,
  faFacebookSquare,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";

config.autoAddCss = false;
library.add(
  faS,
  faBars,
  faChevronDown,
  fab,
  faTwitter,
  faFacebookSquare,
  faLinkedinIn,
  faYoutube,
  faRightToBracket
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="ga4">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
