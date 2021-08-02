import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        // Phone
        [theme.breakpoints.down('sm')]: {
          background: "linear-gradient(to right, #dc4b32, #e68228 )",
          color: 'white',
          bottom: theme.spacing(3),
          right: theme.spacing(3),
        },
        // Tablet
        [theme.breakpoints.between('sm', 'md')]: {
          background: "linear-gradient(to right, #dc4b32, #e68228 )",
          color: 'white',
          bottom: theme.spacing(5),
          right: theme.spacing(5),
          width: '90px',
          height: '90px',
        },
        [theme.breakpoints.up('lg')]: {
          background: "linear-gradient(to right, #dc4b32, #e68228 )",
          color: 'white',
          bottom: theme.spacing(5),
          right: theme.spacing(5),
          width: '70px',
          height: '70px',
        },
      },
}));