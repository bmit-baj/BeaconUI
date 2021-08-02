import React from 'react'
import { Card, CardContent, CardActions, Typography, IconButton, Button} from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import DirectionsIcon from '@material-ui/icons/Directions';
import useStyles from './styles';
import { useSpeechSynthesis } from 'react-speech-kit';

const Büro = ({ room }) => {
    const classes = useStyles();
    const { speak } = useSpeechSynthesis();

    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {room.name} {room.number}
                    </Typography>
                    <Typography variant="h5">
                        {room.etage}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                    {room.person}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {room.person2}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<DirectionsIcon />} >
                    Navigate
                </Button>
                <IconButton aria-label="Speak" onClick={() => speak({ text: room.name }) & speak({ text: room.number }) & speak({ text: room.etage }) & speak({ text: room.person }) & speak({ text: room.person2 })} >
                    <VolumeUpIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Büro
