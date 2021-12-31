import Link from 'next/link'
import Head from 'next/head'
// import Script from 'next/script'
import Layout from '../../components/layout'

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        {/* <Script 
          src="https://connect.facebook.net/en_US/sdk.js" 
          strategy="lazyOnload"
          onLoad={ () =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        /> */}
      </Head>
      <h1>My First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
          {/* <a className="foo" target="_blank" rel="noopener noreferrer">
            Hello World
          </a> */}
        </Link>
      </h2>
    </Layout>
  )
}

export default FirstPost;