import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { SocketContext } from '../SocketContext';


//css styles for our VideoPlayer
const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {

    //passing the contect and its variables to the method above
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    //using styles created above
    const classes = useStyles();
    return (
       <Grid container className={classes.gridContainer}>
      
       {/* Our own video */}
       {
           // this used to say if there is a stream only then render our stream
           stream && (
          <Paper className={classes.paper}>
        <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom>{ name || 'User Name'}</Typography>
        <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
        </Grid>
        </Paper>
           )
       }
       

        {/* Participant's video */}
        {
            //this is saying: only if the call is accepted and call is not ended only then show the participant's video.
            callAccepted && !callEnded && (
             <Paper className={classes.paper}>
        <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom>{call.name || 'Participant Name'}</Typography>
        <video playsInline ref={userVideo} autoPlay className={classes.video} />
        </Grid>
        </Paper>
            )
        }
       </Grid> 
    );
}

export default VideoPlayer;