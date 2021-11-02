/*
************************************************************************************************
This file's code acts as a server and handles all the backend requests and handshakes for websockets and other components.
************************************************************************************************
*/


//calling the express framework
const app = require("express")();



//creating the server using node js built in function createServer()
//passing app in the server
const server = require("http").createServer(app);



// calling cors to enable cross-origin requests
/* 
CORS is shorthand for Cross-Origin Resource Sharing. 
It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request
was initiated. This policy is used to secure a certain web server from access by other website or domain.
*/
const cors = require("cors");



/*
Socket.IO is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers. 
It has two parts: a client-side library that runs in the browser, and a server-side library for Node. js.
*/
const io = require("socket.io")(server, {
  cors: {
    //allowing connections from all origins with "*" character.
    origin: "*",
    method: ["GET", "POST"],
  },
});



//using the cors instant
app.use(cors());



//Now we have to declare our ports on which our server will run
const PORT = process.env.PORT || 5000;



//creating our first route which will notify the user of the server is running.
app.get("/", (req, res) => {
  //sending response on the webpage when the user visits port 5000.
  res.send("Server is running on port 5000.");
});



/*
Now we can start coding the socket.io for the data transmission. This is where entire back-end code for data transmission of our video resides.  
*/
io.on("connection", (socket) => {
  //first step will be to emit the id(unique ID) of ourself, once we have establied the connection with the socket.
  socket.emit("me", socket.id);

  //when the connection with the socket ends, this message will be emited.
  socket.on("disconnect", () => {
    socket.broadcast.emit("callended");
  });
   
  //the function for the calling the required user ith four parameteres. 
  socket.on("calluser", ({ userToCall, signalData, from, name }) => {

  //putting the call data on the frontend    
  io.to(userToCall).emit("calluser", {signal: signalData, from, name})

  });

  //function when the user accepts the call.
  socket.on("answercall", (data) => {
      //emiting the information about the call acceptance.
      io.to(data.to).emit("callaccepted", data.signal);
  });
});



//starting the server on the specified PORT. and logging it in the terminal.
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
