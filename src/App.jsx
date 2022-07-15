import { useEffect } from "react";
import { letters } from "./data";
import { useDispatch } from "react-redux";
import { getUsers } from "./store/usersState";
import { Container, Paper, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import Card from "./components/Card";
import BirthdayList from "./components/BirthdayList";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    console.log("hhhh");
  }, [dispatch]);

  return (
    <Container maxWidth="xl" className={classes.flex}>
      <div className={classes.left}>
        <Typography variant="h2">Users</Typography>
        <div className={classes.letterList}>
          {letters.map((item) => (
            <Paper key={item} className={classes.card}>
              <Typography variant="h4">{item}</Typography>
              <Card letter={item} />
            </Paper>
          ))}
        </div>
      </div>
      <div className={classes.right}>
        <Typography variant="h2">Users birthday</Typography>
        <BirthdayList />
      </div>
    </Container>
  );
}

export default App;
