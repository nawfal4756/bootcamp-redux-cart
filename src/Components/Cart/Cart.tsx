import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Cart.styles";
import {useSelector} from "react-redux";

export default function Cart() {
  const classes = useStyles();
  const cartItems = useSelector((state) => {
    console.log(state)
  })

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.text}>
            Cart
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
