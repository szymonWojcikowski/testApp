import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import {
    HashRouter,
    BrowserRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import TechStackBox from './Components/TechStackBox/TechStackBox.jsx';
import Menu from './Components/Menu/Menu.jsx';
import WeekPlannerApp from './projects/WeekPlannerApp/src/WeekPlannerApp.jsx';

const Contact = () => (
    <div>Kontakt</div>
);
{/*exact albo exact={true}*/}

const App = () => {
    return (
            <HashRouter>
                <>
                <Menu />
                <Switch>
                    <Route exact path="/" component={TechStackBox} />
                    <Route path="/projects" component={WeekPlannerApp} />
                </Switch>
                </>
            </HashRouter>
    );
};



document.addEventListener('DOMContentLoaded',
    function(){
        ReactDOM.render(
            <App />,
            document.getElementById('root')
        );
    });