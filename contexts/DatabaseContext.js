import React from "react"
import {db} from "../firebase"
import {ref, set} from "firebase/database";
// import { useAuth } from "../contexts/AuthContext";
// const {currentUser} = useAuth()



 export function writeMessageData(p,name,message,index) {
    
    // var dataStructurePath = localStorage.getItem('hostID').concat('/').concat('chats').concat('/').concat(localStorage.getItem('chatRoomName').concat('/'))
    set(ref(db, p + `message_${index}`), {
      name: name,
      message: message,
      index: index
    });
    
  }

  // export function readMessageData(p){
  //  var j = ref(db, p)
  //   onValue(j, (snapshot) => {
  //     const data = snapshot.val();
  //     console.log(data)
  //     console.log()
  //   });
  // }

  // export function readMessageData(messages){
  //   //messages.//('value', function(snapshot) {
  //    var test2
     
  //      onValue(messages, test2 = function(snapshot){

  //     var values = Object.values(snapshot.val());
  //     var guide = []
  //     var unordered = []
  //     var ordered = []
  //     var test = []
  //     for (var i, i = 0; i < values.length; i++) {
  //       guide.push(i+1)
  //       unordered.push([values[i], values[i].index]);
  //       }

  //       guide.forEach(function(key) {
  //       var found = false
  //       unordered = unordered.filter(function(item) {
  //           if(!found && item[1] == key) {
  //           ordered.push(item[0])
  //           found = true
  //             return false
  //           }
  //           else{
  //             return true
  //           }
  //         })
  //       })
  //         var counter = 0;
  //         ordered.forEach(function(data){
  //          test[counter] = 
  //            {
  //              "name":data.name,
  //              "message":data.message
  //           }
  //           counter ++;

  //        })
  //        return test
  //   })
    
    

    
    
  //   return test2
  // }

  

  
