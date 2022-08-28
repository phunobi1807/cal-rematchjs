import "../styles/_app.scss";
import * as models from "../models/models.jsx"

function MyApp({ Component, pageProps }) {
  const store = init ({
    models,
  })
  return <Component {...pageProps} />
}

export default MyApp
