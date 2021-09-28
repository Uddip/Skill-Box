import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

function notifications() {
  return (
    <div>
      <Head>
        <title>Skill Box</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      NOTIFICATIONS
      
      <Footer />  
    </div>
  )
}

export default notifications
