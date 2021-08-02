import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Aufenthaltsraum from './Aufenthaltsraum/Aufenthaltsraum';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
const rooms = [
    { 'id': 1, 'name': 'Cafeteria', 'grösse': '40', 'etage': 'EG' },
    { 'id': 2, 'name': 'Warteberreich', 'grösse': '5', 'etage': '1. OG' },
];

const AufenthaltsräumeMap = () => {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <main className={classes.content}>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                placeholder="Name"
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
                    } else if (val.name.toLowerCase().includes(searchTerm.replace(/ /g, '').toLowerCase())){
                        return val
                    }
                }).map((room) => (
                    <Grid item key={room.id} xs={12} sm={6} md={4} lg={3}>
                        <Aufenthaltsraum  room={room} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default AufenthaltsräumeMap;