
import {useEffect} from "react";
import React from "react"
import styles from "./Cmessage.module.css"
import {writeMessageData} from "../contexts/DatabaseContext";

import {db} from "../firebase"
import {ref,onValue } from "firebase/database";
import { useAuth } from "../contexts/AuthContext";
import Router from 'next/router';





function ChatMessage(){
    Check()
    return(
        <div id="chat_container" className = {styles["chat_container"]}>
            <div id="chat_inner_container" className = {styles["chat_inner_container"]}>
                <div id="chat_content_container" className = {styles["chat_content_container"]}>
                    
                </div>
                
                <div id="chat_input_container" className = {styles["chat_input_container"]}>
                    <input id="chat_input" onChange={setMessage} className = {styles["chat_input"]} maxLength="1000" placeholder="Say something..."></input>
                    <button id="chat_input_send" className = {styles["chat_input_send"]}>Send</button>
                </div>
                
                <div id="chat_logout_container" className = {styles["chat_logout_container"]}>
                    <button id="chat_logout" className = {styles["chat_logout"]}>Exit</button>
                </div>
            </div>

        </div>
    )
}

export default ChatMessage


//stores input field message value
var message = ''

function setMessage(event){
    message = event.target.value
    //input_message = event.target.value

}

//checks if send button is pressed
function Check(){
    const {currentUser } = useAuth();
    
    useEffect(() => { 
       var chat_logout =  document.getElementById("chat_logout")
       chat_logout.onclick = () =>{
           localStorage.clear()
           Router.push('/chat')
       }
        
        
        chat_input_send.onclick = () =>{
            if(localStorage.getItem("index") == null){
                var index = 0;
                localStorage.setItem("index",index)
            }
             console.log("Button Pressend")
             console.log(message)
             
             
             localStorage.setItem("index",parseInt(localStorage.getItem("index"), 10) + 1)
             var newIndex = localStorage.getItem("index")
             console.log("New index: " + newIndex)
             var p = localStorage.getItem('hostId').concat('/').concat('chats').concat('/').concat(localStorage.getItem('chatRoomName').concat('/'))
             var messages = ref(db,localStorage.getItem('hostId').concat('/').concat('chats').concat('/').concat(localStorage.getItem('chatRoomName').concat('/')))
            
             writeMessageData(p,currentUser.email,message,newIndex)
             //if (value%2 == 0)
            //  if((parseInt(newIndex, 10) % 2) == 0){
            //  writeMessageData(p,localStorage.getItem("nickName"),message,newIndex)
            //  }else if((parseInt(newIndex, 10) % 2) != 0){
            //      writeMessageData(p,localStorage.getItem("nickName2"),message,newIndex)
            //  }
                   
             onValue(messages, function(snapshot){
                  var values = Object.values(snapshot.val());
                  var guide = []
                  var unordered = []
                  var ordered = []
                  var test = []
                  for (var i, i = 0; i < values.length; i++) {
                    guide.push(i+1)
                    unordered.push([values[i], values[i].index]);
                    }

                    console.log("unordered array")
                    console.log(unordered)

                    console.log("guide array")
                    console.log(guide)
            
                    guide.forEach(function(key) {
                    var found = false
                    unordered = unordered.filter(function(item) {
                        if(!found && item[1] == key) {
                        ordered.push(item[0])
                        found = true
                          return false
                        }
                        else{
                          return true
                        }
                      })
                    })
                    console.log("ordered array")
                    console.log(ordered)
                    var counter = 0;
                    ordered.forEach(function(data){
                       test[counter] = 
                         {
                           "name":data.name,
                           "message":data.message
                        }
                        counter ++;
            
                     })
                     console.log("inside")
                     //console.log(test[0]["name"])
                     //console.log(test[0]["message"])
                     console.log("this is test array")
                     console.log(test)
                     //displaying text messages 
                     var chat_content_container = document.getElementById("chat_content_container")
                     while (chat_content_container.firstChild) {
                        chat_content_container.removeChild(chat_content_container.firstChild);
                    }
                   
                     test.forEach(function(data){
                        var nameText = data.name
                        var messageText = data.message
                        //var outer_message_container = document.createElement('div')

                        var other_message_container = document.createElement('p')
                        other_message_container.setAttribute('class','Cmessage_message_container__1sZ9S')
                        other_message_container.textContent = `${nameText}: ${messageText}` 
                        var br = document.createElement('br')
                        
                        //outer_message_container.append(other_message_container)
                        chat_content_container.append(other_message_container,br)
                    })
                })//end of reading 
                           
           }  
       }, []);
}

