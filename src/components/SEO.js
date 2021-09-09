import Head from 'next/head'

import React, { useEffect } from 'react'

const MetData = props => {
  useEffect(() => {
    window.OneSignal = window.OneSignal || []
    OneSignal.push(function () {
      OneSignal.init({
        appId: '45a4f03a-7b6a-40e4-8ae6-813d83430c6d',
        safari_web_id:
          'web.onesignal.auto.0d8cfe1b-addf-4fe0-8094-42e4bf6360cd',
        notifyButton: {
          enable: false,
        },
        promptOptions: {
          actionMessage: 'Wanna get notified about new events and updates?',
          acceptButtonText: 'Yes',
          cancelButtonText: 'No, Thanks',
          showCredit: false,
        },
      })
    })
  }, [])

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
        itemProp="image"
        content="https://tinkerhubpce.vercel.app/icons/logo_icon.jpg"
      />
      <meta
        property="og:image"
        itemProp="image"
        content="http://tinkerhubpce.vercel.app/icons/logo_icon.jpg"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image:type" content="image/jpeg" />

      <meta property="og:image:width" content="256" />
      <meta property="og:image:height" content="256" />
      <meta property="og:type" content="website" />
    </Head>
  )
}

export default MetData
