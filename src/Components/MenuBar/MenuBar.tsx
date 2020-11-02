import React, { useState } from "react";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useStyles } from "./MenuBar.styles";
import { NavLink } from "react-router-dom";

export default function MenuBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const itemsList = [
    { name: "Home", link: "" },
    { name: "About Us", link: "about-us" },
    { name: "Store", link: "store" },
    { name: "Contact Us", link: "contact-us" },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton}>
            <MenuIcon
              onClick={() => {
                setOpen(true);
              }}
            />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Nawfal's Shoe Store
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div
          className={classes.drawer}
          onClick={() => {
            setOpen(false);
          }}
          onKeyDown={() => {
            setOpen(false);
          }}
        >
          <div
            className={classes.backButton}
            onClick={() => {
              setOpen(false);
            }}
          >
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {itemsList.map(({ name, link }, index) => (
              <div
                key={Number(index)}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <NavLink to={`/${link}`}>
                  <ListItem button>
                    <Typography>{name}</Typography>
                  </ListItem>
                </NavLink>
                <Divider />
              </div>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
