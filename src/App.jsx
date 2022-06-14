import './App.css';
import { letters } from './data';
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getUsers } from './store/usersState';
import Card from './Card';
import EmployeeBD from './EmployeeBD';

function App() {

  // const [employees, setEmployees] = useState([]);
  // const [selectedEmployees, setSelectedEmployees] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // fetch("https://randomuser.me/api/?results=80")
    // .then((response) => response.json())
    // .then((data) => setEmployees(data.results));

    dispatch(getUsers());

  }, [dispatch]);

  // const handleEmployee = (item, status) => {
  //   const updatedEmployees = status
  //     ? [...selectedEmployees, item]
  //     : selectedEmployees.filter((selectedItem) => selectedItem.login.uuid !== item.login.uuid);

  //   setSelectedEmployees(updatedEmployees);
  // };


  return (
    <div className="wrapper">
      <div className="content-left">
        <h1>Users</h1>
        <div className="letter-list">
          {letters.map((item) => (
            <div className="letter" key={item}>
            <h2>{item}</h2>
            <Card
                letter={item}
                // employees={employees}
                // handleEmployee={handleEmployee}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="content-right">
        <h1>Users birthday</h1>
        {/* <EmployeeBD selectedEmployees={selectedEmployees}/> */}
      </div>
    </div>
  );
}

export default App;


  



// import { Container, CssBaseline, AppBar, Typography } from "@material-ui/core";

// import { makeStyles } from "@material-ui/core/styles";
// import Card from "./components/card/Card";
// import List from "./components/list/List";

// const useStyles = makeStyles({
//   flex: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   wrapper: {
//     maxWidth: 1000,
//     margin: "10px auto",
//   },
//   center: {
//     alignSelf: "center",
//   },
//   header: {
//     textAlign: "center",
//   },
// });

// function App() {
//   const classes = useStyles();
//   
//   const date = new Date().toLocaleDateString("en-GB");

//   useEffect(() => {
//     dispatch(getTickers());
//   }, [dispatch]);

//   return (
//     <div className={classes.wrapper}>
//       <CssBaseline />
//       <Typography variant="h3">NotFakeFinance</Typography>
//       <AppBar position="static" elevation={0}>
//         <Container className={`${classes.flex} ${classes.container}`}>
//           <List />
//           <Typography className={classes.center}>{date}</Typography>
//         </Container>
//       </AppBar>
//       <Typography variant="h5" className={classes.header}>
//         Watchlist
//       </Typography>
//       <Card />
//     </div>
//   );
// }

// export default App;
