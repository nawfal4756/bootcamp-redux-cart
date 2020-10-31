import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 250,
    flexShrink: 0,
  },
  drawerText: {
    fontSize: "20px",
  },
  backButton: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    justifyContent: "flex-end",
  },
}));
