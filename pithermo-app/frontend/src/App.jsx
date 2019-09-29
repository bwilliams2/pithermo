import React, { useState, HTMLAttributes } from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

import PropTypes, { object } from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Slider from '@material-ui/lab/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { StyleRulesCallback, WithStyles, withStyles, StyledComponentProps, Paper } from "@material-ui/core";


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
      width: 600,
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


function App() {
  const classes = useStyles();

  let [appState, setAppState] = useState({
    "drawer": {
      "open": true,
    },
    "thermo":{
      "tempSetpoint": 50,
      "tempReading": 32
    }
  });
  
  function updateField(field, value) {
    console.log(value)
    setAppState({
      ...appState,
      [field]: {...appState[field], ...value}
    })
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar} color="primary">
        <Toolbar className={classes.toolbar} style={{ height: 64 }}>
          <Typography color="inherit">Thermostat</Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <div className={ classes.toolbar } />
        <Paper className={ classes.paper }>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Card>
                <Grid container spacing={8}>
                  <Grid item xs={6}>
                    <Typography variant='h5'>
                      Set Temperature: { appState.thermo.tempSetpoint } °C
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <div style={{ width: '50%', alignItems: 'center', margin: 'auto' }}>
                      <Slider
                        classes={{ container: classes.slider }}
                        min={32}
                        max={75}
                        value={ appState.thermo.tempSetpoint }
                        step={1}
                        onChange={(event, value) => updateField("thermo", {tempSetpoint: value}) } />
                    </div>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <Typography variant='h5' style={{ padding: "16px" }}>
                  Current Temperature: { appState.thermo.tempReading } °C
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </div>
  );
}

export default App;
