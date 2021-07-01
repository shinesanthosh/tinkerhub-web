import Head from 'next/head'

import React from 'react'

const MetData = (props) => {
  let title =
    props.title == '' ? 'Tinkerhub PCE ' : 'Tinkerhub PCE | ' + props.title

  return (
    <Head>
      <title>{title}</title>

      {/* standard meta tags */}

      <meta
        name="keywords"
        content="tinkerhub, Providence, engineering, chengannur, diy"
      />
      <meta name="description" content={props.description} />

      {/* Proprietary meta tags */}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={props.description} />
      <meta
        property="og:image:secure_url"
        itemprop="image"
        content="https://tinkerhubpce.vercel.app/icons/logo_icon.jpg"
      />

      <meta property="og:type" content="website" />
      <meta property="og:image:type" content="image/jpeg" />

      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta property="og:type" content="website" />
    </Head>
  )
}

export default MetData
