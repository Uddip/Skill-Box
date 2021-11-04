
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatTitle from "../components/ChatTitle";
import ChatMessage  from "../components/ChatMessage";
import {useEffect} from "react";
import styles from "../components/Cmessage.module.css"

function message(){
   
    return(

        <div className= {styles["message_parent"]}>
            <Header />
            <ChatTitle />
            <ChatMessage />
            
            <Footer />
        </div>
    )
}

export default message