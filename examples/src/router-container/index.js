import React, { memo } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import RouterAnimation from "../../../lib";
import PageA from "../pageA";
import PageB from "../pageB";
import PageC from "../pageC";
import PageD from "../pageD";

export default withRouter(
  memo(function RouterContainer(props) {
    return (
      <RouterAnimation>
        <Switch location={props.location}>
          <Route exact component={PageA} path="/pageA" />
          <Route exact component={PageB} path="/pageB" />
          <Route exact component={PageC} path="/pageC" />
          <Route exact component={PageD} path="/pageD" />
          <Redirect to="/pageA" />
        </Switch>
      </RouterAnimation>
    );
  })
);
