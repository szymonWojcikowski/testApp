import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import {
    BrowserRouter,
} from 'react-router-dom';

import TechStackBox from './Components/TechStackBox/TechStackBox.jsx';
import Menu from './Components/Menu/Menu.jsx';


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