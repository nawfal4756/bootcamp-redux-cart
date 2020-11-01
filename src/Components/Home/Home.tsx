import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Home.styles";
import styles from "./Home.module.css";

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <div className={styles.image}>
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
