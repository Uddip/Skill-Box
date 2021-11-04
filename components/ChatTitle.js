import React from "react"
import {useEffect} from "react";
import styles from './Ctitle.module.css'

function ChatTitle(){
    Check();
    return(
        <div className={styles["title_container"]}>
            <div className={styles["title_inner_container"]}>
                <div id="title" className={styles["title"]}>
                    <h1>SkillBox Chat</h1>
                </div>
                
                <div id="subTitle" className={styles["subTitle"]}></div>
                
            </div>
            
            
        </div>
    )
}

function Check(){
useEffect(() => { 
    
 var subTitle = document.getElementById('subTitle')
 if(localStorage.getItem('chatRoomName') != null){
    subTitle.textContent = localStorage.getItem('chatRoomName')
  }
    }, []);
}

export default ChatTitle