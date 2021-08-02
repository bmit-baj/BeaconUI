import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Büro from './Büro/Büro';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const rooms = [
    { id: 1, name: 'Büro', person: 'Max Mustermann', person2: 'Max Mustermann', number: '068', etage: '1. OG' },
    { id: 2, name: 'Büro', person: 'Lisa Mustermann', person2: 'Max Mustermann', number: '060', etage: '1. OG' },
];

const BürosMap = () => {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <main className={classes.content}>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                placeholder="Name oder Nummer"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={event => {setSearchTerm(event.target.value)}}
                />
            </div>
            <Grid container justifyContent="left" spacing={4}>
                {rooms.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.number.toLowerCase().includes(searchTerm.replace(/ /g, '').toLowerCase()) ||
                               val.person.toLowerCase().replace(/ /g, '').includes(searchTerm.replace(/ /g, '').toLowerCase()) ||
                               val.person2.toLowerCase().replace(/ /g, '').includes(searchTerm.replace(/ /g, '').toLowerCase())
                                   ){
                        return val
                    }
                }).map((room) => (
                    <Grid item key={room.id} xs={12} sm={6} md={4} lg={3}>
                        <Büro  room={room} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default BürosMap;