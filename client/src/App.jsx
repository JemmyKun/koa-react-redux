import React from "react";
import "./app.scss";
import {Switch, Route, Redirect} from "react-router-dom";

import Main from "./pages/main/main";
import Login from "./pages/login/login";

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <Switch>
                    <Route path={"/login"} component={Login}/>
                    <Route path={"/main"} component={Main}/>
                    <Redirect to={"/login"}/>
                </Switch>
            </div>
        );
    }
}

export default App;