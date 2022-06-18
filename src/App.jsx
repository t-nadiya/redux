import { useEffect } from "react";
import { letters } from "./data";
import { useDispatch } from "react-redux";
import { getUsers } from "./store/usersState";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Typography } from "@material-ui/core";
import Card from "./components/Card";
import BirthdayList from "./components/BirthdayList";

const useStyles = makeStyles({
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  left: {
    width: "70%",
  },
  right: {
    width: "30%",
  },
  letterList: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: 250,
    height: 500,
    overflowY: "scroll",
    backgroundColor: " #A5BECC",
    margin: "10px",
    padding: "10px",
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
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
