import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import User from "./User";

const useStyles = makeStyles({
  user: {
    margin: "5px auto",
    padding: 10,
    backgroundColor: "#A5BECC",
  },
  
});

function Card({ letter }) {
  
  const classes = useStyles();
  const users = useSelector((state) => state.users.users);

  const [filteredUsers, setFilteredUsers] = useState([]);
  
  useEffect(() => {
    const usersByLetter = users
      .filter((item) => item.name.first.startsWith(letter))
      .sort((a, b) => {
        if (a.name.first < b.name.first) {
          return -1;
        }
        if (a.name.first > b.name.first) {
          return 1;
        }
        return 0;
      });

    setFilteredUsers(usersByLetter);
    
  }, [users,letter]);

  return (
    <>
      {filteredUsers.length === 0 && <Typography>No User</Typography>}
      {filteredUsers.map((user) => (
        <Paper key={user.login.uuid} className={classes.user}>
           <User user={user} />
        </Paper>
      ))}
    </>
  );
}

export default Card;
