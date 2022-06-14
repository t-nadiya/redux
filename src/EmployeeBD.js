import { year } from "./data";
import React, { useEffect, useState } from "react";
import Month from "./Month";

function EmployeeBD({ selectedEmployees }) {

  const [reOrderedYear, setReOrderedYear] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    let beforeCurrentMonth = year.slice(0, currentDate.getMonth());
    let afterCurrentMonth = year.slice(currentDate.getMonth());

    let orderedYear = [].concat(afterCurrentMonth, beforeCurrentMonth);
    setReOrderedYear(orderedYear);
  }, [selectedEmployees]);

  return (
    <>
      {selectedEmployees.length === 0 && <div>Users List is empty</div>}
      {reOrderedYear.map((month) => (
        <div key={month}>
          {selectedEmployees.length > 0 && (
            <Month month={month} selectedEmployees={selectedEmployees} />
          )}
          </div>
      ))}
    </>
  );
}

export default EmployeeBD;

