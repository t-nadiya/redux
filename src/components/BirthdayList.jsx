import React, { useEffect, useState } from "react";
import { year } from "../data";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import Month from "./Month";

const useStyles = makeStyles({
  text: {
    color: "#7C3E66",
    margin: "10px",
    padding: "10px",
  },
});

function BirthdayList() {
  const classes = useStyles();
  const [reOrderedYear, setReOrderedYear] = useState([]);
  const selected = useSelector((state) => state.users.selected);

  useEffect(() => {
    const currentDate = new Date();
    const beforeCurrentMonth = year.slice(0, currentDate.getMonth());
    const afterCurrentMonth = year.slice(currentDate.getMonth());

    const orderedYear = [].concat(afterCurrentMonth, beforeCurrentMonth);
    setReOrderedYear(orderedYear);
  }, []);

  return (
    <>
      {selected.length === 0 && (
        <Typography className={classes.text} variant="h5">
          Users List is empty
        </Typography>
      )}
      {reOrderedYear.map((month) => (
        <Paper key={month} elevation={0}>
          {selected.length > 0 && <Month month={month} />}
        </Paper>
      ))}
    </>
  );
}

export default BirthdayList;
