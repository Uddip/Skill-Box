//Required Imports
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './SocketContext';


import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function VideoHome() {
  return (
    <div className="">
      <Head>
        <title>Skill Box Video Call</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
 
      <div className="flex flex-col text-center uppercase md:text-4xl m-10 text-purple-600">
        <p>SKillBox Video Call</p>
      </div>

      <ContextProvider>

      <App />

    </ContextProvider>
      <Footer />
    </div>
  )
}
