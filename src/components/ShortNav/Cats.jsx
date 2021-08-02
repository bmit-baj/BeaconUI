import React from 'react';
import Grid from '@material-ui/core/Grid';
import Cat from './Cat/Cat';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom';


const categories = [
    { id: 1, name: 'Sitzungszimmer', link: '/sitzungszimmer',},
    { id: 2, name: 'Aufenhaltsräume', link: '/aufenthaltsräume',},
    { id: 3, name: 'Restaurant', link: '1',},
    { id: 4, name: 'Empfang', link: '1',},
    { id: 4, name: 'Büros', link: '/büros',},
];

const Cats = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <main className={classes.content}>
            <div className={classes.heading}>
                <Typography variant="body2">1. Welche Art Räumlichkeit suchen Sie?</Typography>
            </div>
            <div className={classes.toolbar}/>
            <Grid container justifyContent="left" spacing={3}>
                {categories.map((categorie) => (
                    <Grid item key={categorie.id} xs={12} sm={6} md={4} lg={3}>
                        <Cat  categories={categorie} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.link}>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        history.push('/all');
                    }}
                >
                    Alle Räume
                </Link>
            </div>
        </main>
    );
}

export default Cats;