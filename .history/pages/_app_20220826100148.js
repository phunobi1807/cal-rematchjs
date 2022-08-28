import "../styles/_app.scss";
import * as models from "../models/models";
import { Provider } from "react-redux";
import { init } from "@rematch/core";

function MyApp({ Component, pageProps }) {
  const store = init ({
    models,
  });
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp
