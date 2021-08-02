import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  link: {
    marginTop: '10px',
  },
  heading: {
    marginBottom: '15px',
  },
  stepper: {
    paddingLeft: '0',
    backgroundColor: 'transparent',
  },
  step: {
    paddingLeft: '0',
  },
  stepIcon: {
    color: "pink"
  }
  
}));