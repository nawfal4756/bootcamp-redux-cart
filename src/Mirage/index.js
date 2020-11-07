import { createServer } from "miragejs";

const menItems = [
  {
    id: "air-jordan-3-valor-blue",
    name: "VALOUR BLUE",
    img: [
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      "https://c.static-nike.com/a/images/t_prod_ss/w_480,c_limit,q_auto,f_auto/041dc65b-be1d-4efd-8000-088b47521e61/air-jordan-3-valor-blue-release-date.jpg",
      "https://c.static-nike.com/a/images/t_prod_ss/w_480,c_limit,q_auto,f_auto/98f2f5db-76d5-45bf-b210-a42c9dc91efe/air-jordan-3-valor-blue-release-date.jpg",
      "https://c.static-nike.com/a/images/t_prod_sc/w_480,c_limit,q_auto,f_auto/54c73dca-32b0-4d7b-b3a5-9abf5942208d/air-jordan-3-valor-blue-release-date.jpg",
      "https://c.static-nike.com/a/images/t_prod_ss/w_480,c_limit,q_auto,f_auto/0c9a1be6-cd64-4bb2-ac9e-a3166830f251/air-jordan-3-valor-blue-release-date.jpg",
      "https://c.static-nike.com/a/images/t_prod_ss/w_480,c_limit,q_auto,f_auto/d2d241a5-e89a-4581-8e8b-89a695cc6a08/air-jordan-3-valor-blue-release-date.jpg",
    ],
    price: 345.0,
  },
  {
    id: "jordan-mars-270-london",
    name: "JORDAN MARS 270 LONDON",
    img: [
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      "https://c.static-nike.com/a/images/t_prod_ss/w_480,c_limit,q_auto,f_auto/08c07a79-16d8-46f3-813f-5b306efeb105/jordan-mars-270-london-release-date.jpg",
      "https://c.static-nike.com/a/images/t_prod_ss/w_480,c_limit,q_auto,f_auto/d0a1b83c-716a-4ebb-859c-2ef11c8a1aa7/jordan-mars-270-london-release-date.jpg",
      "https://c.static-nike.com/a/images/t_prod_sc/w_480,c_limit,q_auto,f_auto/0cb54d31-0135-4e44-9748-1276d83ede40/jordan-mars-270-london-release-date.jpg",
      "https://c.static-nike.com/a/images/t_prod_ss/w_480,c_limit,q_auto,f_auto/f0d79a54-baf7-42af-b58c-f4ece09f6c58/jordan-mars-270-london-release-date.jpg",
      "https://c.static-nike.com/a/images/t_prod_ss/w_480,c_limit,q_auto,f_auto/99fd5582-37fd-47f5-b341-6deddc5db776/jordan-mars-270-london-release-date.jpg",
    ],
    price: 645.0,
  },
  {
    id: "air-jordan-xxxv-dna-basketball-shoe",
    name: "Air Jordan XXXV 'DNA'",
    img: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9822bd64-2744-433f-a5c7-0a5dd36863a1/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/66381fcb-b89a-49be-b922-718b209996af/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ceb5e184-5b84-4170-992e-ac6e202bfaa9/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4e1b7cfe-a88a-40cf-8d19-5e5f49ff6973/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/aa52cd32-f7b6-46d4-bf29-a97f6bdba6c4/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b8eaaf8f-36f9-426d-839b-abfad4332c92/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/958be50c-cd20-4117-8920-c2f4df175dd3/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/36250c3f-cb31-45e1-8223-a689091ae000/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9d0eb1df-9fa0-42e4-beb5-75808b428c21/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
    ],

    price: 150.0,
  },
  {
    id: "air-zoom-pegasus-37-shield-running-shoe",
    name: "Nike Air Zoom Pegasus 37 Shield",
    img: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ae54984a-9d3e-4351-8da6-bd4b0a1b9f1e/air-zoom-pegasus-37-shield-running-shoe-W3c93l.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0d578937-d2ae-44ab-944a-e6ce3252e825/air-zoom-pegasus-37-shield-running-shoe-W3c93l.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bae4e458-e64c-45c0-8fc3-686bb5d93956/air-zoom-pegasus-37-shield-running-shoe-W3c93l.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/61881d17-da53-4e6a-9b20-bfca98f587f7/air-zoom-pegasus-37-shield-running-shoe-W3c93l.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c17d9bf8-9f75-4ec1-ac09-a8c2610ca160/air-zoom-pegasus-37-shield-running-shoe-W3c93l.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7a7a4e6d-4f74-4091-b5c6-12762d95486e/air-zoom-pegasus-37-shield-running-shoe-W3c93l.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/15215b8e-697a-481f-9cae-3d344a8ff5ab/air-zoom-pegasus-37-shield-running-shoe-W3c93l.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/41c779b0-a253-407f-8397-6cb6a22038f1/air-zoom-pegasus-37-shield-running-shoe-W3c93l.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d9ea9c52-8e08-4090-b20c-b982e74adee1/air-zoom-pegasus-37-shield-running-shoe-W3c93l.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/957c7e3c-e8ca-4d00-9092-0fdb76f8f278/air-zoom-pegasus-37-shield-running-shoe-W3c93l.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b45a0e50-37db-4704-8ccb-5e6b704b4718/air-zoom-pegasus-37-shield-running-shoe-W3c93l.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e9fa6a01-4ffa-45b4-9f71-f81d46959c47/air-zoom-pegasus-37-shield-running-shoe-W3c93l.jpg",
    ],

    price: 150.0,
  },
  {
    id: "air-jordan-xxxv-dna-basketball-shoe",
    name: "Air Jordan XXXV 'DNA'",
    img: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9822bd64-2744-433f-a5c7-0a5dd36863a1/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/66381fcb-b89a-49be-b922-718b209996af/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ceb5e184-5b84-4170-992e-ac6e202bfaa9/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4e1b7cfe-a88a-40cf-8d19-5e5f49ff6973/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/aa52cd32-f7b6-46d4-bf29-a97f6bdba6c4/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b8eaaf8f-36f9-426d-839b-abfad4332c92/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/958be50c-cd20-4117-8920-c2f4df175dd3/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/36250c3f-cb31-45e1-8223-a689091ae000/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9d0eb1df-9fa0-42e4-beb5-75808b428c21/air-jordan-xxxv-dna-basketball-shoe-bGv0b6.jpg",
    ],

    price: 225.0,
  },
];

const womenItems = [
  {
    id: "leather-pump-with-horsebit",
    name: "Leather Pump with Horsebit",
    img: [
      "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1579017603/616596_1RH00_1000_001_100_0000_Light-Womens-leather-pump-with-Horsebit.jpg",
      "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1579017604/616596_1RH00_1000_006_100_0000_Light-Womens-leather-pump-with-Horsebit.jpg",
    ],
    price: 980.0,
  },
  {
    id: "platform-sandal-with-double-g",
    name: "Platform Sandal with Double G",
    img: [
      "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1551886207/573021_A3N00_1000_001_082_0000_Light-Platform-sandal-with-Double-G.jpg",
      "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1551886207/573021_A3N00_1000_006_082_0000_Light-Platform-sandal-with-Double-G.jpg",
    ],
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
