import React from "react";
import { Switch, Route } from "react-router-dom";
import GroupList from "./group-list";
import GroupDetails from "./group-details";


function Main() {
  return (
    <div className="main">
        <Switch>
            <Route exact path="/">
                <GroupList/>
            </Route>
            <Route path="/details/:id">
                <GroupDetails/>
            </Route>
        </Switch>
    </div>
  );
}

export default Main;
