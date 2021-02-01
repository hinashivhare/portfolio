import React from 'react';
import { Route, Switch} from "react-router-dom";
import FrontPage from './FrontPage'
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";


const Router = () => {
    return(
        <>
            <Switch>
                <Route path="/" exact component={FrontPage}/>
                <Route path="/about" exact component={About}/>
                <Route path="/experience" exact component={Experience}/>
                <Route path="/education" exact component={Education}/>
            </Switch>
        </>
    );
}

export default Router;