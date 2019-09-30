import React, { useState, FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import InputLabel from "@material-ui/core/InputLabel";
import {
  KeyboardTimePicker,
  MaterialUiPickersDate,
} from "@material-ui/pickers";
import { useStyles } from "./theme/theme";

type RulesProps = {};

const Rules: FunctionComponent<RulesProps> = props => {
  const classes = useStyles();
  const [startTime, setStartTime] = useState(new Date());
  const [rangeType, setRangeType] = useState("duration");

  const handleStartTime = (
    date: MaterialUiPickersDate,
    value: string | null | undefined
  ): void => {
    const newDate = date as Date;
    setStartTime(newDate);
  };

  const handleRangeType = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRangeType(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item container xs={12} justify="center">
        <Grid item xs={2}>
          <FormControl fullWidth>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Start Time"
              value={startTime}
              onChange={handleStartTime}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={rangeType}
              onChange={handleRangeType}
            >
              <FormControlLabel
                value="duration"
                control={<Radio />}
                label="Duration"
              />
              <FormControlLabel
                value="time"
                control={<Radio />}
                label="End Time"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="End Time"
              value={startTime}
              onChange={handleStartTime}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Rules;
