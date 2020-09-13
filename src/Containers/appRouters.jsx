import React from "react";
import { Route, Switch } from "react-router";
import User from "../Screens/userDetails";
import Activity from "../Screens/userActivity";
import Activity2 from "../Screens/userActivity2";
import appUrls from "../Config/appUrls";
const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={User} />
        <Route exact path={appUrls.USER} component={User} />
        <Route exact path={appUrls.USER_ACTIVITY} component={Activity} />
        <Route exact path={appUrls.USER_ACTIVITY2} component={Activity2} />
      </Switch>
    </>
  );
};
export default Routing;
