import React from 'react';
import useStyles from './styles';
import Fab from '@material-ui/core/Fab';
import HelpIcon from '@material-ui/icons/HelpOutlineOutlined';
import { useHistory } from 'react-router-dom';

const Button = () => {
    const classes = useStyles();
    const history = useHistory();
    
    return (
        <div className={classes.root}>
           <Fab aria-label='help' className={classes.fab}  onClick={() => {history.push('/all');}}>
              <HelpIcon />
           </Fab>
        </div>
    )
}

export default Button
