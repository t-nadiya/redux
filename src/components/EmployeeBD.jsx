import { year } from "../data";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Month from "./Month";

function EmployeeBD() {

  const [reOrderedYear, setReOrderedYear] = useState([]);
  const selected = useSelector(state=> state.users.selected)

  useEffect(() => {
    const currentDate = new Date();
    let beforeCurrentMonth = year.slice(0, currentDate.getMonth());
    let afterCurrentMonth = year.slice(currentDate.getMonth());

    let orderedYear = [].concat(afterCurrentMonth, beforeCurrentMonth);
    setReOrderedYear(orderedYear);
  }, [selected]);
  console.log(selected);

  return (
    <>
      {selected.length === 0 && <div>Users List is empty</div>}
      {reOrderedYear.map((month) => (
        <div key={month}>
          {selected.length > 0 && (
            <Month month={month}/>
          )}
          </div>
      ))}
    </>
  );
}

export default EmployeeBD;

