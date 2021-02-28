import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path = {"/page1"} component = {Page1} />
                <Route exact path = {"/page2"} component = {Page2} />
                <Route path = {"/"} component = {Home} />
            </Switch>
        </Router>
    );
}

export default App;
