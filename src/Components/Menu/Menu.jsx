import React from 'react';
import '../../../src/Components/Menu/menu.scss';

const Menu = () => {
     return (
            <ul className="menu">
                <li><a href="https://szymonwojcikowski.github.io/techstack"
                    title="The technologies that I use"
                >TechStack</a></li>
                <li><a href="https://szymonwojcikowski.github.io/weekPlanner" 
                    target="blank"
                    title="WeekPlanner - the project in which I used ES6, SCSS and HTML">WeekPlanner</a></li>
                <li><a href="https://szymonwojcikowski.github.io/weekPlannerReactive" 
                    target="blank"
                    title="ReactiveRecreation - the project in which I used Webpack, React and SCSS">ReactiveRecreation</a></li>
            </ul>
    );
};

export default Menu;
