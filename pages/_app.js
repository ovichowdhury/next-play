import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faS, faChevronDown } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(faS, faBars, faChevronDown);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
