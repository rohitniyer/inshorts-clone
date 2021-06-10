import React from "react";
import clsx from "clsx";
import { FaBars } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import category from "../Data/Categories";
import {
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250,
    paddingLeft: 10,
    paddingRight: 5,
  },
  fullList: {
    width: "auto",
  },
});

const styles = {
  height: 50,
  padding: 20,
  marginTop: 10,
  borderRadius: 20,
  color: "white",
};

export default function TemporaryDrawer({ setCategories }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          Categories
          <ListItemText />
        </ListItem>
      </List>
      <Divider />
      <List>
        {category.map((text, index) => (
          <ListItem
            style={styles}
            button
            key={index}
            onClick={() => setCategories(text)}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <FaBars className="menu-bar-icon" />
        </Button>
        <ThemeProvider theme={theme}>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </ThemeProvider>
      </React.Fragment>
    </div>
  );
}
