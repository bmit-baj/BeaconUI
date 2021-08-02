import { Sitzungszimmer,  Aufenthaltsräume, Büros} from '../../components'
import useStyles from './styles'
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const AllRooms = () => {
    const classes = useStyles();
    
    return (
        <>
            <div className={classes.heading}>
                <CssBaseline />
                    <Typography variant="h4">
                        Alle Räume
                    </Typography>
                    <Typography variant="body2">
                        Hier sind alle Räume zusammengefasst
                    </Typography>
                <CssBaseline />
            </div>
            <div className={classes.heading2}>
                    <Typography variant="body2">Sitzungszimmer</Typography>
            </div>
            <Sitzungszimmer />
            <div className={classes.heading2}>
                    <Typography variant="body2">Aufenthaltsräume</Typography>
            </div>
            <Aufenthaltsräume />
            <div className={classes.heading2}>
                    <Typography variant="body2">Büros</Typography>
            </div>
            <Büros />
        </>
    )
}

export default AllRooms
