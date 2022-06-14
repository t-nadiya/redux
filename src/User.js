import React from 'react';
import { useState } from "react";

function User({ employee, handleEmployee }) {
    const [itemClass, setItemClass] = useState('');
  return (
    <>
        <p key={employee.login.uuid} className={itemClass}>
            {employee.name.first + " " + employee.name.last}
          </p>
        <form>
            <input
              type="radio"
              id="not-active"
              name="rb"
              value="false"
              defaultChecked
              onChange={() => {
                handleEmployee(employee, false);
                setItemClass("");
              }}
            />
            <label htmlFor="not-active">not active</label>
            <input
              type="radio"
              id="active"
              name="rb"
              onChange={() => {
                handleEmployee(employee, true);
                setItemClass("active");
              }}
            />
            <label htmlFor="active">active</label>
          </form>
    </>
  )
}

export default User;

