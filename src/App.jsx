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


const App = () => {
    return (
            <BrowserRouter>
                <>
                <Menu />
                <TechStackBox />
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


{/*<Switch>*/}
    {/*<Route exact path="/" component={TechStackBox} />*/}
{/*</Switch>*/}