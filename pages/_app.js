import '../styles/global.css'

// In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.
// is that global CSS affects all elements on the page.
const App = ({ Component, pageProps }) => {
  return <Component {...pageProps}/>
}

export default App;