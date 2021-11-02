import React, {useContext} from 'react';
import { Button } from '@material-ui/core';
import { SocketContext } from '../SocketContext'


const Notifications = () => {

   //getting method we need form our context
    const { answerCall, call, callAccepted } = useContext(SocketContext);
    return (
        <>
        {/* when the call is received and not yet accepted show the following code */}
           {
            call.isReceivedCall && !callAccepted && (
              <div style={{ display: 'flex', justifyContent: 'center'}}>
               <h1>{call.name} is calling: </h1>
               <Button variant="contained" color="primary" onClick={answerCall}>
               Answer
               </Button>
               </div>
                 )}
        </>
    )
}

export default Notifications
