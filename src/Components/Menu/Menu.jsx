import React from 'react';
import '../../../src/Components/Menu/menu.scss';

const Menu = () => {
     return (
            <ul className="menu">
                <li><a href="https://szymonwojcikowski.github.io/techstack">TechStack</a></li>
                <li><a href="https://szymonwojcikowski.github.io/weekPlanner" target="blank">WeekPlanner</a></li>
                <li><a href="https://szymonwojcikowski.github.io/weekPlannerReactive" target="blank">ReactiveRecreation</a></li>
            </ul>
    );
};

export default Menu;
