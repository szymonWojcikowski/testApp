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
// import WeekPlannerApp from './projects/WeekPlannerApp/src/WeekPlannerApp.jsx';

const Contact = () => (
    <div>Kontakt</div>
);
{/*exact albo exact={true}*/}

const App = () => {
    return (
            <BrowserRouter>
                <>
                <Menu />
                <Switch>
                    <Route exact path="/" component={TechStackBox} />
                </Switch>
                </>
            </BrowserRouter>
    );
};



document.addEventListener('DOMContentLoaded',
    function(){
        ReactDOM.render(
            <App />,
            document.getElementById('root')
        );
    });