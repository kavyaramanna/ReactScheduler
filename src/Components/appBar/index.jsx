import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Toolbar, Badge, AppBar } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
export class Bar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Toolbar className={classes.root}>
          <MenuIcon style={{ justifyContent: "right", color: "grey" }} />
        </Toolbar>
      </>
    );
  }
}

export default withStyles(styles)(Bar);
