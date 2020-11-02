import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./Store.styles";
// import menShoes from "../../Images/menShoes.jpg";

export default function Store() {
  const classes = useStyles();
  const list = [
    {
      name: "Men Shoes",
      img: require("../../Images/menShoes.jpg"),
      category: "men-shoes",
    },
    { name: "Women Shoes", img: "womenShoes", category: "women-shoes" },
  ];

  return (
    <div>
      <Grid
        container
        spacing={2}
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        {list.map(({ name, img, category }, index) => (
          <Grid item xs={10} md={10} lg={5} key={index}>
            <Card raised className={classes.card}>
              <Link to={`/store/${category}`}>
                <CardContent>
                  <img src={img} alt={name} className={classes.image} />
                  <Typography variant="h4" className={classes.text}>
                    {name}
                  </Typography>
                </CardContent>

                <CardActionArea>
                  <Button variant="outlined" className={classes.button}>
                    Shop Now!
                  </Button>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
