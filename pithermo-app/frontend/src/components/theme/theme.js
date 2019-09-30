import { createMuiTheme, makeStyles } from "@material-ui/core";

const STYLES = theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});

const theme = createMuiTheme({
 typography: {
   useNextVariants: true
 }
});


const drawerWidth = 240;

const useStyles = makeStyles({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: "80%",
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    alignItems: 'center',
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 6,
    padding: theme.spacing.unit * 3,
    },
  },
  root: {
    display: 'flex',
    flexGrow: 1
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    ...theme.mixins.toolbar
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    minHeight: '64px',
  },
  appBar: {
    zIndex: 1,
    height: '64px',
    position: 'fixed'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  slider: {
    padding: '22px 0px',
    alignItems: 'center'
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
  },
  drawerPaperClose: {
    overflowX: 'hidden',
  },
  appBarSpacer: {
    height: '64px'
  },
  content: {
    flexGrow: 1,
    padding: '10px',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  // h5: {
  //   marginBottom: theme.spacing.unit * 2,
  // },
});

export { useStyles };