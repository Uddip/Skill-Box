import React from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function notifications() {
  return (
    <div>
      <Head>
        <title>Skill Box</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      NOTIFICATION SETTINGS

      <Footer />
    </div>
  )
}

export default notifications
