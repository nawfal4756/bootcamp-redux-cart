import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { useStyles } from "./ProductInfo.styles";

export default function ProductInfo() {
  const { category, id } = useParams();
  const [data, setData] = useState<any[]>();
  const [imageNumber, setImageNumber] = useState(0);

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
  }, []);

  const classes = useStyles();
  console.log("data", data);
  const { name, img, price } = data;

  return (
    <div>
      <Grid container spacing={2}>
        {/* Image Component */}
        <Grid item xs={12} md={12} lg={6}>
          <img src={img[0]} alt={name} className={classes.image} />
        </Grid>
        {/* Name And price Component */}
        <Grid item xs={12} md={12} lg={6}></Grid>
      </Grid>
    </div>
  );
}
