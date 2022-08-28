import "../styles/_app.scss";

function MyApp({ Component, pageProps }) {
  const store = init ({
    models,
  })
  return <Component {...pageProps} />
}

export default MyApp
