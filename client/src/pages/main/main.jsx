import React from "react";
import {Switch, Route} from "react-router-dom";

import Order from "../order/order";
import Knowledge from "../knowlwdge/knowledge";
import Head from "../../components/head/head";
import Sensitive from "../sentive/Sensitive";

const Main = (props) => {
    return (
        <div className={"app-main"}>
            <Head history={props.history}/>
            <Switch>
                <Route path={"/main/order"} exact component={Order}/>
                <Route path={"/main/knowledge"} exact component={Knowledge}/>
                <Route path={"/main/sensitive"} exact component={Sensitive}/>
            </Switch>
        </div>
    );
};

export default Main;