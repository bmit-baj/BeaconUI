import { Büros } from '../../components'
import useStyles from './styles'
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const OfficeSeite = () => {
    const classes = useStyles();
    
    return (
        <>
            <div className={classes.heading}>
                <CssBaseline />
                    <Typography variant="h4">
                        Büros
                    </Typography>
                    <Typography variant="body1">
                        Hier sind alle Büros aufgeführt
                    </Typography>
                <CssBaseline />
            </div>
            <div className={classes.heading2}>
                    <Typography variant="body2">2. Wählen Sie Ihr Büro aus</Typography>
            </div>
            <Büros />
        </>
    )
}

export default OfficeSeite
