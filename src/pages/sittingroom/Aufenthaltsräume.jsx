import { Aufenthaltsräume } from '../../components'
import useStyles from './styles'
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const AufenthaltsräumeSeite = () => {
    const classes = useStyles();
    
    return (
        <>
            <div className={classes.heading}>
                <CssBaseline />
                    <Typography variant="h4">
                    Aufenthaltsräume
                    </Typography>
                    <Typography variant="body1">
                        Hier sind alle Aufenthaltsräume aufgeführt
                    </Typography>
                <CssBaseline />
            </div>
            <div className={classes.heading2}>
                    <Typography variant="body2">2. Wählen Sie Ihren Aufenthaltsraum aus</Typography>
            </div>
            <Aufenthaltsräume />
        </>
    )
}

export default AufenthaltsräumeSeite
