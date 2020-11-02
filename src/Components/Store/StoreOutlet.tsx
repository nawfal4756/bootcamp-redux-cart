import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Outlet } from "react-router";
import { useStyles } from "./StoreOutlet.styles";

export default function StoreOutlet() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.text}>
            Store
          </Typography>
        </Grid>
      </Grid>
      <Outlet />
    </div>
  );
}
