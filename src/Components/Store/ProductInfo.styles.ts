import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    margin: "2%",
  },
  image: {
    height: "350px",
    maxWidth: "100%",
    margin: "auto",
  },
  imageDisplayContainer: {
    display: "flex",
    flexDirection: "row",
  },
  imageDisplay: {
    height: "75px",
    width: "75px",
    border: "1px black solid",
    cursor: "pointer",
  },
  text: {
    textAlign: "center",
  },
  description: {
    margin: "2% 0",
  },
  textField: {
    margin: "0 6%",
    width: "30px",
  },
  price: {
    textAlign: "center",
    margin: "5% 0",
  },
});
