//Required Imports
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './SocketContext';

//Rendering our App component where we will have our frontend for entire Video application.
// class VideoIndex extends Component {

// if( typeof window !== 'undefined') {
//     ReactDOM.render(


// <ContextProvider>

// <App />

// </ContextProvider>


// ,document.getElementById('root'));
// }
// }

// export default VideoIndex;

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
      <ContextProvider>

      <App />

    </ContextProvider>
      <Footer />
    </div>
  )
}
