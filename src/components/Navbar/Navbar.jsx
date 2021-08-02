import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './styles';
import logo from '../../assests/logo_espas.png';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import RoomIcon from '@material-ui/icons/Room';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import SitzIcon from '@material-ui/icons/AirlineSeatLegroomNormal';
import Empfang from '@material-ui/icons/QuestionAnswer';
import WorkIcon from '@material-ui/icons/Work';
import { useHistory } from 'react-router-dom';

const Navbar = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    ESPAS - Navigation
                </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                <img src={logo} alt="ESPAS" className={classes.logo}/>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                </div>
                <Divider />
                <List>
                {['Startseite', 'Anleitung', 'Über diese App',].map((text, index) => (
                    <ListItem button key={text} onClick={() => {
                        {index === 0 && history.push('/')}
                        {index === 1 && console.log('sitzungsräume')}
                        {index === 2 && console.log('aufenhaltsräume')}
                    }}>
                    <ListItemIcon>
                        {index === 0 && <HomeIcon/>}
                        {index === 1 && <HelpIcon/>}
                        {index === 2 && <InfoIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
                <Divider />
                <List>
                {['Alle Räume', 'Sitzungsräume', 'Aufenhaltsräume', 'Empfang', 'Büros',].map((text, index) => (
                    <ListItem 
                        button key={text} onClick={() => {
                        {index === 0 && history.push('/all')}
                        {index === 1 && history.push('/sitzungszimmer')}
                        {index === 2 && history.push('/aufenthaltsräume')}
                        {index === 3 && history.push('/')}
                        {index === 4 && history.push('/büros')}
                    }}>
                    <ListItemIcon>
                        {index === 0 && <RoomIcon />}
                        {index === 1 && <MeetingRoomIcon />}
                        {index === 2 && <SitzIcon />}
                        {index === 3 && <Empfang/>}
                        {index === 4 && <WorkIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
            </Drawer>
        </div>
    )
}

export default Navbar
