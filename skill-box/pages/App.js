import React from 'react';
//material UI imports. Material UI is just a UI kit which have some predefined ematerials that we can use.
import { Typography, AppBar } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

//importing component
import VideoPlayer from './video-call-components/VideoPlayer';
import Options from './video-call-components/options';
import Notifications from './video-call-components/Notifications';

//This where our UI styles for the app will go.
const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));


const App = () => {

    {/*
    *Now we will use our syles created above. 
    */}
    const classes = useStyles();

    return (

        <div className={classes.wrapper}>

        {/*Header component*/}
            {/* <AppBar position="static" color="inherit" className={classes.appBar}>
            <Typography varient="h2" align="center"> SkillBox Video Call</Typography>
            </AppBar> */}
        
        {/* Video Player */}
         <VideoPlayer />

         {/* Options Menu. This includes -> Notiifications(When somebody calls you)*/}
        <Options>
        <Notifications />
        </Options>
      

        </div>
    );
}

export default App
