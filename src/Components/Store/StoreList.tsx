import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStyles } from "./StoreList.styles";

export default function StoreList() {
  const url = "/store/";
  const [data, setData] = useState<any[]>();
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    var selected = "";
    const itemList = async () => {
      setLoading(true);
      switch (category) {
        case "men-shoes":
          selected = "men";
          break;
        case "women-shoes":
          selected = "women";
          break;
        default:
          break;
      }

      try {
        const temp = await axios.get(`${url}${selected}`);
        setData(temp.data.items);
      } catch (error) {
        console.log("error", error);
      }
      setLoading(false);
    };

    itemList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {loading ? (
          <Backdrop open={true}>
            <CircularProgress />
          </Backdrop>
        ) : (
          data?.map(({ name, id, img, price }) => (
            <Grid item xs={10} md={10} lg={3} key={id}>
              <Card raised className={classes.card}>
                <CardContent>
                  <img src={img} alt={name} className={classes.image} />
                  <Typography className={classes.text}>{name}</Typography>
                  <Typography className={classes.text}>${price}.00</Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.button} variant="outlined">
                    View Product
                  </Button>
                  <Button className={classes.button} variant="outlined">
                    <AddShoppingCartIcon />
                    <Typography>Add to Cart</Typography>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}
