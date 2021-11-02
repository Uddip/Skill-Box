import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { SocketContext } from '../SocketContext';


//css styles for our VideoPlayer
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
  },
}));

const VideoPlayer = () => {

    //passing the contect and its variables to the method above
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    //using styles created above
    const classes = useStyles();
    return (
       <div className="container mx-auto min-w-full">
      <div className="grid grid-cols-2 gap-3">
    <div>
     {/* Participant's video */}
        {
            //this is saying: only if the call is accepted and call is not ended only then show the participant's video.
            callAccepted && !callEnded && (
             <Paper className={classes.paper}>
        <video playsInline ref={userVideo} autoPlay className="h-full w-full" />
        <Typography variant="h5" gutterBottom>{call.name || 'Participant Name'}</Typography>
            </Paper>
            )
        }
    </div>

    <div>
            {/* Our own video */}
       {
           // this used to say if there is a stream only then render our stream
           stream && (
          <Paper className={classes.paper}>
        <video playsInline muted ref={myVideo} autoPlay className="h-full min-w-full" />
        <Typography variant="h5" gutterBottom>{ name || 'User Name'}</Typography>
        </Paper>
           )
       }
    </div>
  </div>
       </div> 
    );
}

export default VideoPlayer;