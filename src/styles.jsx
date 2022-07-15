import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
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
