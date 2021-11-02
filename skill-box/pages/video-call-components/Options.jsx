import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { SocketContext } from '../SocketContext'

//styles to use
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: '10px 20px',
    border: '2px solid black',
  },
 }));

//We have to pass the patameter children because options have notifications tag embeded in it in the App.js file.
//Spo inorder to render that we need a children parameter.
const Options = ( {children} ) => {

    //getting required parameters from our context object
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);

    //const for specifying the id for calee
    const [idToCall, setIdToCall] = useState('');

    //using styles
    const classes = useStyles();

    return (
       <Container className={classes.container}>
       <Paper elevation={10} className={classes.paper}>
       <form className={classes.root} noValidate autoComplete="off">
       <Grid container className={classes.gridContainer}>
       <Grid item xs={12} md={6} className={classes.padding}>
       <Typography gutterBottom variant="h6"> Account Info</Typography>
       <TextField label="Name" value={name} onChange={ (e) => setName(e.target.value) } fullWidth />
        {console.log(me)}
       <CopyToClipboard text={me} className={classes.margin}>
       <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
       Copy your ID
       </Button>
       </CopyToClipboard>
       </Grid>

        <Grid item xs={12} md={6} className={classes.padding}>
       <Typography gutterBottom variant="h6"> Make a call</Typography>
       <TextField label="ID to Call" value={idToCall} onChange={ (e) => setIdToCall(e.target.value) } fullWidth />
       {
           //we will show different buttons depending on call accepted or ended.
           callAccepted && !callEnded ? (
           <Button 
           variant="contained" 
           color="secondary" 
           startIcon={ <PhoneDisabled fontSize="large" />}
           fullWidth
           onClick={ leaveCall }
           className={classes.margin}
           >
           Hang Up!
           </Button>
           ) : (
               <Button
               variant="contained" 
               color="primary" 
               startIcon={ <Phone fontSize="large" />}
               fullWidth
               onClick={ () => callUser(idToCall) }
               className={classes.margin}
               >
           Call
           </Button>
           )
       }
       </Grid>
       </Grid>
       </form>
       { children }
       </Paper>
       </Container>
    )
}

export default Options;