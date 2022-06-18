import React from "react";
import { useDispatch } from "react-redux";
import { handleUser } from "../store/usersState";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

function User({ user }) {
  const dispatch = useDispatch();

  return (
    <FormControl>
      <FormLabel key={user.login.uuid} id="select">
        {user.name.first + " " + user.name.last}
      </FormLabel>
      <RadioGroup row defaultValue="not-active" name="select">
        <FormControlLabel
          value="not-active"
          control={
            <Radio
              size="small"
              style={{
                color: "#243A73",
              }}
              onChange={() => {
                dispatch(handleUser({ user: user, status: false }));
              }}
            />
          }
          label="not-active"
        />
        <FormControlLabel
          value="active"
          control={
            <Radio
              size="small"
              style={{
                color: "#243A73",
              }}
              onChange={() => {
                dispatch(handleUser({ user: user, status: true }));
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
