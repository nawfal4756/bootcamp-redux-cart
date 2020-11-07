import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStyles } from "./ProductInfo.styles";

// interface DataTypes {
//   id?: string;
//   name?: string;
//   img?: string;
//   price?: number;
// }

export default function ProductInfo() {
  const { category, id } = useParams();
  const [data, setData] = useState<any>();
  const dataItem: any[] = data;
  const displayData = dataItem ? dataItem[0] : null;
  const [imageNumber, setImageNumber] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  useEffect(() => {
    const itemInfo = async () => {
      const url = "/store/";
      var selected = "";

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
        const tempList: Array<any> = await axios.get(`${url}${selected}`);
        const tempData: any = tempList;
        const filtered = tempData.data.items.filter(
          (data: { id: string }) => data.id === `${id}`
        );
        console.log("filtered", filtered);
        setData(filtered);
      } catch (error) {
        console.log("error", error);
      }
    };

    itemInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = useStyles();
  console.log("data", displayData);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box display="flex" height={350} maxWidth={"100%"}>
                <Box m="auto">
                  <img
                    src={displayData?.img[imageNumber]}
                    alt=""
                    className={classes.image}
                  />
                </Box>
              </Box>
            </Grid>
            {displayData?.img.map((link: string, index: number) => (
              <Grid
                item
                xs={3}
                md={3}
                lg={2}
                key={index}
                onClick={() => {
                  setImageNumber(index);
                }}
              >
                <img src={link} alt="" className={classes.imageDisplay} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="h3" className={classes.text}>
            {displayData?.name}
          </Typography>
          <Typography className={classes.description}>{description}</Typography>
          <ButtonGroup variant="contained" aria-label="Quantity">
            <Button
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              +
            </Button>
            <Button
              onClick={() => {
                setQuantity(quantity - 1);
              }}
              disabled={quantity <= 0}
            >
              -
            </Button>
          </ButtonGroup>
          <TextField
            value={quantity}
            className={classes.textField}
            onChange={(e) => {
              setQuantity(Number(e.target.value));
            }}
            type="number"
          />
          <Typography variant="h5" className={classes.price}>
            Price: ${displayData?.price}.00
          </Typography>
          <Box display="flex">
            <Box m="auto">
              <Button variant="outlined">
                <AddShoppingCartIcon />
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
