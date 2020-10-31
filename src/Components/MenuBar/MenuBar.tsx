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

export default function MenuBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const itemsList = ["Home", "About Us", "Store", "Contact Us"];

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
          <div className={classes.backButton}>
            <IconButton
              onClick={() => {
                setOpen(false);
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {itemsList.map((name, index) => (
              <div key={index}>
                <ListItem button>
                  <Typography className={classes.drawerText}>{name}</Typography>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
