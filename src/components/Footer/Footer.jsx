import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import useStyles from './styles';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://openucel.myhostpoint.ch">
          Justin Bauer
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                <Copyright />
                </Container>
            </footer>
        </div>
    )
}

export default Footer
