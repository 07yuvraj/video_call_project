import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import { SocketContext } from '../SocketContext';

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
    const classes = useStyles();
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    return (
        <Grid container className={classes.gridContainer}>
            {/*Our own video */}
            {stream && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h5' gutterBottom>{name || "My Name"}</Typography>
                        <video playsInline ref={myVideo} autoPlay className={classes.video} />
                    </Grid>
                </Paper>
            )}
            {/*Other user's video */}
            {callAccepted && !callEnded && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h5' gutterBottom>{call.name || "Other user's name"}</Typography>
                        <video playsInline ref={userVideo} autoPlay className={classes.video} />
                    </Grid>
                </Paper>
            )}
        </Grid>
    )
}

export default VideoPlayer
