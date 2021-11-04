import React from "react"
import {useEffect} from "react";
import Router from 'next/router';
import styles from "./Croom.module.css"



function ChatRoom(){
    Check()
    return(
        
        <div className = {styles["chatRoom_container"]}>
            
            <div className = {styles["chatRoom_inner_container"]}>
                
                <div className = {styles["id_input_container"]}>
                    <input onChange={setHostId} type="text" id="id_input" className= {styles["id_input"]} maxLength= {15} placeholder= 'Enter Host ID...'></input>
                </div>
                <div className= {styles["chatRoom_input_container"]}>
                    <input onChange={setRoomName} type="text" id="chatRoom_input" className= {styles["chatRoom_input"]} maxLength= {15} placeholder= 'Enter Chat Room Name...'></input>
                </div>
               
                <div id ="chatRoom_button_container" className= {styles["chatRoom_button_container"]}>
                    <button id="chat_button" className={styles["chat_button"]}>Next</button>
                </div>
                
            </div>

        </div>
    )
    

}


//var nickName = ''
var hostId = ''
var roomName = ''
// function setNickName(event){
//     nickName = event.target.value  
// }
function setHostId(event){
    hostId = event.target.value
}
function setRoomName(event){
    roomName = event.target.value
}

function Check(){
    useEffect(() => { 
         chat_button.onclick = () =>{
              console.log("Button clicked")
              console.log(hostId)
              console.log(roomName)
              //console.log(nickName)

              localStorage.setItem("hostId",hostId)
              localStorage.setItem("chatRoomName",roomName)
            //   if(localStorage.getItem("nickName",nickName) != null){
            //     localStorage.setItem("nickName2",nickName)
            //   }else{localStorage.setItem("nickName",nickName)}
              
              Router.push('/message')
            }  
        }, []);
}



export default ChatRoom





/*
 <div className= {styles["nickName_input_container"]}>
                    <input onChange={setNickName} type="text" id="nickName_input" className= {styles["nickName_input"]} maxLength= {15} placeholder= 'Enter Nick Name...'></input>
                </div>

*/




