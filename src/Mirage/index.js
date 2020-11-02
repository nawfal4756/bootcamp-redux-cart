import { createServer } from "miragejs";

const menItems = [
  {
    id: "air-jordan-3-valor-blue",
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    price: 345.0,
  },
  {
    id: "jordan-mars-270-london",
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    price: 645.0,
  },
  {
    id: "air-jordan-1-zoom-racer-blue",
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    price: 150.0,
  },
  {
    id: "nike-air-zoom-type",
    name: "Nike Air Zoom-Type",
    img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
    price: 150.0,
  },
  {
    id: "leBron-17",
    name: "LeBron 17",
    img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a9808db2-aee5-4f0c-8c23-ce101daf612d/lebron-17-graffiti-basketball-shoe-DkNN8W.jpg",
    price: 225.0,
  },
];

const womenItems = [
  {
    id: "leather-pump-with-horsebit",
    name: "Leather Pump with Horsebit",
    img:
      "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1579017603/616596_1RH00_1000_001_100_0000_Light-Womens-leather-pump-with-Horsebit.jpg",
    price: 980.0,
  },
  {
    id: "platform-sandal-with-double-g",
    name: "Platform Sandal with Double G",
    img:
      "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1585003503/628100_A3N00_5815_001_100_0000_Light-Womens-platform-sandal-with-Double-G.jpg",
    price: 930.0,
  },
];

export default function shopServer() {
  createServer({
    routes() {
      this.namespace = "/store";
      this.get("/men", { items: menItems });
      this.get("/women", { items: womenItems });
    },
  });
}