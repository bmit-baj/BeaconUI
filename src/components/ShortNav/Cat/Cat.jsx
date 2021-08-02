import React from 'react'
import { Card, CardContent, Typography,} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';

const Cat = ({ categories }) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Link
        variant="body2"
        onClick={() => {
            history.push(categories.link)
        }}
        >
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {categories.name}
                    </Typography>
                </div>
            </CardContent>
        </Card>
        </Link>
    )
}

export default Cat
