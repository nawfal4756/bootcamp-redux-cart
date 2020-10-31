import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Home.styles";

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={2} justify="center" alignContent="center">
          <Grid item xs={12}>
            <Typography variant="h1" className={classes.text}>
              Welcome To Nawfal's Shoe Store
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
