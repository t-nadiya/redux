import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleUser } from "../store/usersState";

import { makeStyles } from "@material-ui/core/styles";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  active: {
    backgroundColor: "red",
  },
  
});

function User({ user }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [itemClass, setItemClass] = useState("");
  return (
    <FormControl>
<FormLabel key={user.login.uuid} className={itemClass} id="demo-radio-buttons-group-label">
  {user.name.first + " " + user.name.last}
</FormLabel>
<RadioGroup row defaultValue="not-active" name="demo-radio-buttons-group-label" >
  <FormControlLabel
    value="not-active"
    control={
      <Radio
        style={{
          color: "#243A73",
        }}
        onChange={() => {
          dispatch(handleUser({ user: user, status: false }));
          // setItemClass("");
        }}
      />
    }
    label="not-active"
  />
  <FormControlLabel
    value="active"
    control={
      <Radio
      style={{
        color: "#243A73",
      }}
        onChange={() => {
          dispatch(handleUser({ user: user, status: true }));
          // setItemClass("classes.active");
        }}
      />
    }
    label="active"
  />
</RadioGroup>
</FormControl>
  );
}

export default User;




{/* <>
      <p key={user.login.uuid} className={itemClass}>
        {user.name.first + " " + user.name.last}
      </p>
      <form>
        <input
          type="radio"
          id="not-active"
          name="rb"
          value="false"
          defaultChecked
          onChange={() => {
            dispatch(handleUser({ user: user, status: false }));
            // setItemClass("");
          }}
        />
        <label htmlFor="not-active">not active</label>
        <input
          type="radio"
          id="active"
          name="rb"
          onChange={() => {
            dispatch(handleUser({ user: user, status: true }));
            // setItemClass("classes.active");
          }}
        />
        <label htmlFor="active">active</label>
      </form>
    </> */}