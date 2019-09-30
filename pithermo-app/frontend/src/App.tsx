import React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// pick a date util library
import DateFnsUtils from "@date-io/date-fns";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import Rules from "./components/Rules";
import { useStyles } from "./components/theme/theme";

const App: React.FC = props => {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar className={classes.appBar} color="primary">
          <Toolbar className={classes.toolbar} style={{ height: 64 }}>
            <Typography color="inherit">Thermostat</Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <div className={classes.toolbar} />
          <Paper className={classes.paper}>
            <Rules />
          </Paper>
        </main>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default App;
