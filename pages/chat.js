import ChatTitle from "../components/ChatTitle";
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatRoom from "../components/ChatRoom";
import styles from "../components/Ctitle.module.css"

function Chat(){
    return(
        <div className = {styles["chat_parent"]}>
        <Header />
        <ChatTitle />
        
        <ChatRoom />
        

        <Footer />
        </div>
    )
}

export default Chat