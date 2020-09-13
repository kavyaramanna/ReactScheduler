import React, { Component } from "react";
import "../../App.css";
import Bar from "../../Components/appBar";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableRow,
  TableContainer,
  TableBody,
  Grid,
  TableCell,
  InputBase,
  Button,
  Paper,
  TextField,
  InputAdornment,
  Divider,
} from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
import IconButton from "@material-ui/core/IconButton";
import Activity from "../../Screens/userActivity";
import appUrls from "../../Config/appUrls";
import Pagination from "@material-ui/lab/Pagination";
// import { handleUserId } from "./data/action";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { Hidden } from "@material-ui/core";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        {
          user_id: "W012A3CDE",
          real_name: " Egon Spengler",
          tz: "America/Los_Angeles",
        },
        {
          user_id: "W07QCRPA4",
          real_name: "Glinda Southgood",
          tz: "Asia/Kolkata",
        },
      ],
    };
  }
  handleClick = (id, i) => {
    console.log(id);
    let user_id = id;
    console.log(user_id);
    if (user_id === "W012A3CDE") {
      this.props.navigateTo(appUrls.USER_ACTIVITY);
    }
    if (user_id === "W07QCRPA4") {
      this.props.navigateTo(appUrls.USER_ACTIVITY2);
    }
  };

  render() {
    const { classes } = this.props;
    const { user } = this.state;

    return (
      <center>
        <Bar />
        <TableContainer component={Paper} className={classes.Table_Paper}>
          <Table className={classes.Table}>
            {/* <Divider /> */}
            <TableHead className={classes.Table_Header}>
              <TableRow>
                <TableCell align="left" className={classes.Details_header}>
                  <b>Sl no</b>
                </TableCell>
                <TableCell align="left" className={classes.Details_header}>
                  <b> User Id</b>
                </TableCell>
                <TableCell align="left" className={classes.Details_header}>
                  <b>User Name</b>
                </TableCell>
                <TableCell align="left" className={classes.Details_header}>
                  <b> Location</b>
                </TableCell>
                <TableCell align="left" className={classes.Details_header}>
                  <b>Active On</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell align="left" className={classes.Details_text}>
                    {idx + 1}
                  </TableCell>
                  <TableCell align="left">{item.user_id}</TableCell>
                  <TableCell align="left">{item.real_name}</TableCell>
                  <TableCell align="left">{item.tz}</TableCell>
                  <TableCell align="left">
                    <Button
                      className={classes.ButtonStyle}
                      onClick={(e) => this.handleClick(item.user_id)}
                      // onClick={this.handleClick}
                    >
                      Check Status
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Grid container direction="row" justify="center" alignItems="center">
          <div className={classes.paginationalign}>
            <Grid item xs={12}>
              <Pagination count={10} color="secondary"></Pagination>
            </Grid>
          </div>
        </Grid>
      </center>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    navigateTo: (url) => dispatch(push(url)),
  };
};

const styledUser = withStyles(styles)(User);
export default connect(null, mapDispatchToProps)(styledUser);
