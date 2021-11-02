/*
This file contains all the functionality of the websockets and the socket.io
 */

import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

//Creating the context for our frontend.
{/**
In a typical React application, data is passed top-down (parent to child) via props,
 but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. 
 Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
 */}
const SocketContext = createContext();



//initial instance of socket.io
//once we deploy our app, we will replace the localhost with the full address of our deployed app.
const socket = io('http://localhost:5000'); 


{/*
Here will will have all the states of our Video chat.
i.e. Everything required to run our video chat.
 */}
const ContextProvider = ({ children }) => {


//setting initial stream state
const [stream, setStream] = useState(null);
//function for setting the user id.
const [me, setMe] = useState('');
//state for calluser
const [call, setCall] = useState({ });
//state for callAccepted
const [callAccepted, setCallAccepted] = useState(false);
//state for callEnded
const [callEnded, setCallEnded] = useState(false);
//state for user we are call to
const [name, setName] = useState('');




//creating a useRef to populate our video stream
const myVideo = useRef();
//creating a useRef to populate participant's video stream
const userVideo = useRef();
//creating a useRef for connection between two peers
const connectionRef = useRef();



//useEffect is the component that mounts and as soon as it mounts, it run the code defined inside it.
useEffect(() => {
    //as oon as our page loads we want user's permissions to access camera and mic.
    //.then() method gets the stream after permission is granted.
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then((currentStream) => {
        setStream(currentStream);
        
        //populating the stream with current data from the camera.
        myVideo.current.srcObject = currentStream;
    });
 
    //Here we are getting the socket id from the method we created inside index.js in the root folder.
    socket.on('me', (id) => { setMe(id) });

    //Here we are getting the instance for 'calluser' from the method we created inside index.js in the root folder.
    socket.on('calluser', ({from, name: callerName, signal }) => { 
        setCall({ isReceivedCall: true, from, name: callerName, signal})
     });

}, []);



//This function handles answering the call
const answerCall = () => {
setCallAccepted(true)

//creating a peer for our call
const peer = new Peer({ initiator: false, trickle: false, stream});

//what to do once we receive a signal
peer.on('signal', (data) => {
    socket.emit('answercall', {signal: data, to: call.from });
})

//we get the current stream from the webcam
peer.on('stream', (currentStream) => {

    //we set the stream for other user.
     userVideo.current.srcObject = currentStream;
})

peer.signal(call.signal);
connectionRef.current = peer;
}



//This function handles the call mechanism
const callUser = (id) => {

    //creating a peer for our call
const peer = new Peer({ initiator: true, trickle: false, stream});

//what to do once we receive a signal
peer.on('signal', (data) => {
    socket.emit('calluser', { userToCall: id, signalData: data, from: me, name});
})
//we get the current stream
peer.on('stream', (currentStream) => {
    //we set the stream for other user.
     userVideo.current.srcObject = currentStream;
})
socket.on('callaccepted', (signal) => {
    setCallAccepted(true);

    peer.signal(signal);
});

connectionRef.current = peer;
}



//This funtions handles the event in which user exits the call.
const leaveCall = () => {
    setCallEnded(true);

    //destroy the connection when the user leaves the call.
    connectionRef.current.destroy();

    //this will reload the window and provide user with a new ID
    window.location.reload();
}

//returning the context to the frontend
return (
    <SocketContext.Provider value={ {
     //now we have to pass everything that we have programmed here.
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      callUser,
      leaveCall,
      answerCall
    } }>

       {/* passing all the children above */}
      {children}

    </SocketContext.Provider>
)
}

export { ContextProvider, SocketContext };