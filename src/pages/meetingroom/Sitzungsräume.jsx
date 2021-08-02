import { Sitzungszimmer } from '../../components'
import useStyles from './styles'
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const SitzungsräumeSeite = () => {
    const classes = useStyles();
    
    return (
        <>
            <div className={classes.heading}>
                <CssBaseline />
                    <Typography variant="h4">
                        Sitzungsräume
                    </Typography>
                    <Typography variant="body2">
                        Hier sind alle Sitzungsräume aufgeführt
                    </Typography>
                <CssBaseline />
            </div>
            <div className={classes.heading2}>
                    <Typography variant="body2">2. Wählen Sie Ihr Büro aus</Typography>
            </div>
            <Sitzungszimmer />
        </>
    )
}

export default SitzungsräumeSeite
