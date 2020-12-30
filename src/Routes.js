import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import HomePage from "@pages/Home/Home";
import Page2 from "@pages/Page2/Page2";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/2" component={Page2} />

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
