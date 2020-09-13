export const styles = (theme) => ({
  root: {
    backgroundColor: "#ffffff",
  },

  Table_Paper: {
    width: "70%",
    borderRadius: "20px",
    boxShadow: "0px 3px 6px #AFB4C929",
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      width: "74vw",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(3),
    },
  },

  Table: {
    borderRadius: "20px",
    margin: "auto",
    backgroundColor: "#ffffff",
  },
  Table_Header: {
    marginTop: theme.spacing(3),
  },
  ButtonStyle: {
    backgroundColor: "#1976d2",
    color: "white",
    fontSize: "12px",
    padding: "10px",
    "&:hover": {
      color: "black",
    },
    [theme.breakpoints.down("sm")]: {
      width: "40vw",
    },
  },
  Details_text: {
    fontSize: "15px",
    fontFamily: "roboto",
    color: "#242021",
    opacity: "1",
  },
  Details_header: {
    fontSize: "17px",
    fontFamily: "Times New Roman",
  },
  Details_pagination: {
    marginTop: theme.spacing(5),
  },
  paginationalign: {
    marginTop: theme.spacing(3),
  },
});
