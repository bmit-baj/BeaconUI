import { ShortNav, HelpButton } from '../../components'
import useStyles from './styles'
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const Startpage = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.greetings}>
                <CssBaseline />
                    <Typography variant="h4">
                        Wilkommen
                    </Typography>
                    <Typography variant="h6">
                        zur Indoor-Navigation der ESPAS
                    </Typography>
                <CssBaseline />
            </div>
            <ShortNav />
            <HelpButton />
        </>
    )
}

export default Startpage

/*
            <div className={classes.greetings}>
                <CssBaseline />
                    <Typography variant="h4">
                        Wilkommen
                    </Typography>
                    <Typography variant="h6">
                        zur Indoor-Navigation der ESPAS
                    </Typography>
                <CssBaseline />
            </div>
*/
