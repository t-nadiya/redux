import React, { useEffect, useState } from "react";

function Month({ month, selectedEmployees }) {
  
  const [employeesByMonth, setEmployeesByMonth] = useState([]);

  useEffect(() => {
    const sortedByMonth = selectedEmployees
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
  }, [month, selectedEmployees, employeesByMonth]);

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
