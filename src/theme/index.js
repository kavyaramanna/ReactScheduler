import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#11cb5f",
    },
    secondary: {
      light: "#5c43e9",
      main: "purple",
    },
  },
});

export default theme;
