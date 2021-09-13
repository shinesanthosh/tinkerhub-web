// import '../Style/main.css'
import Head from 'next/head'

export default function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        {/* <title>TinkerHUB PCE</title> */}
        <link rel="icon" href="/icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
