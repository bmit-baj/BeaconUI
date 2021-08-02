import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Sitzungszimmer from './Sitzungszimmer/Sitzungszimmer';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const rooms = [
    { id: 1, name: 'Sitzungszimmer', grösse: '4', number: '68', etage: '1. OG' },
    { id: 2, name: 'Sitzungszimmer', grösse: '7', number: '60', etage: '2. OG' },
];

const SitzungszimmerMap = () => {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <main className={classes.content}>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                placeholder="Nummer"
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
                    } else if (val.number.toLowerCase().includes(searchTerm.replace(/ /g, '').toLowerCase())){
                        return val
                    }
                }).map((room) => (
                    <Grid item key={room.id} xs={12} sm={6} md={4} lg={3}>
                        <Sitzungszimmer  room={room} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default SitzungszimmerMap;