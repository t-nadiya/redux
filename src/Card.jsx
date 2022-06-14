import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setData} from "./store/usersState"
import User from "./User";

function Card({ letter, employees, handleEmployee }) {
  const users = useSelector((state) => state.users?.users);

  // console.log(users);
  // const [filteredEmployees, setFilteredEmployees] = useState([]);

  // console.log(employees);

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(users);
    // const employeesByLetter = employees
    //   .filter((item) => item.name.first.startsWith(letter))
    //   .sort((a, b) => {
    //     if (a.name.first < b.name.first) {
    //       return -1;
    //     }
    //     if (a.name.first > b.name.first) {
    //       return 1;
    //     }
    //     return 0;
    //   });
    
    dispatch(setData(letter))
    // setFilteredEmployees(employeesByLetter);
  }, [dispatch, letter]);

  // const usersByLetter = users?.filter((item) => item.name.first.startsWith(letter)
  // const usersByLetter = users?.filter((item) => {
    // console.log(item.name.first);
    // console.log(letter);
  // }
  // .sort((a, b) => {
  //   if (a.name.first < b.name.first) {
  //     return -1;
  //   }
  //   if (a.name.first > b.name.first) {
  //     return 1;
  //   }
  //   return 0;
  // })

  // );

  return (
    <>
      {/* {usersByLetter.length === 0 && <div>No User</div>}
      {usersByLetter.map((user) => (
        <div key={user.login.uuid} className="item">
          {/* <User employee={user} handleEmployee={handleEmployee} /> */}
        {/* </div>
      ))} */}
    </>
  );
}

export default Card;
