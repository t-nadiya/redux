import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    margin: "10px",
  },
  caption: {
    color: "#7C3E66",
  },
  text: {
    color: "#C6DCE4",
  },
});

function Month({ month }) {
  const classes = useStyles();
  const selected = useSelector((state) => state.users.selected);
  const [usersByMonth, setUsersByMonth] = useState([]);

  useEffect(() => {
    const sortedByMonth = selected
      .filter(
        (item) =>
          new Date(item.dob.date).toLocaleString("en-us", { month: "long" }) ===
          month
      )
      .sort((a, b) => {
        if (a.name.last < b.name.last) {
          return -1;
        }
        if (a.name.last > b.name.last) {
          return 1;
        }
        return 0;
      });
    setUsersByMonth(sortedByMonth);
  }, [month, selected]);

  return (
    <Paper className={classes.card} elevation={0}>
      <Typography variant="h5" className={classes.caption}>
        {month}
      </Typography>
      {usersByMonth.length === 0 && (
        <Typography className={classes.text}>No User</Typography>
      )}
      {usersByMonth.map((item) => (
        <Typography key={item.login.uuid}>
          {item.name.last +
            " " +
            item.name.first +
            " " +
            item.dob.date.substring(0, 10)}
        </Typography>
      ))}
    </Paper>
  );
}

export default Month;
