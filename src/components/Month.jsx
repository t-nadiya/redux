import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Month({ month }) {
  
  const [employeesByMonth, setEmployeesByMonth] = useState([]);
  const selected = useSelector(state=> state.users.selected)

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
    setEmployeesByMonth(sortedByMonth);
  }, [month, selected, employeesByMonth]);
  // console.log(selected);

  return (
    <>
      <h4>{month}</h4>
      {employeesByMonth.length === 0 && <p>No User</p>}
      {employeesByMonth.map((item) => (
        <p key={item.login.uuid}>
          {item.name.last +
            " " +
            item.name.first +
            " " +
            item.dob.date.substring(0, 10)}
        </p>
      ))}

    </>
  );
}

export default Month;
