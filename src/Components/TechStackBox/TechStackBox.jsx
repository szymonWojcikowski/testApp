import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom';

import '../../../src/Components/TechStackBox/tech-stack-box.scss';
// import {BrowserRouter, NavLink} from "react-router-dom";


const TechStackBox = () => {
    const techList = [
        { tech: "HTML", icon: "devicon-html5-plain-wordmark", text: "frame for every website" },
        { tech: "CSS/SCSS", icon: "devicon-css3-plain-wordmark", text: "appearance flexibility thanks to RWD" },
        { tech: "JS", icon: "devicon-javascript-plain colored", text: "powerful language supported by all browsers" },
        { tech: "ReactJS", icon: "devicon-react-original", text: "a light-weight library for building efficient web applications" },
        { tech: "WebPack", icon: "devicon-webpack-plain", text: "module bundler to keep other technologies together" },
        { tech: "Others", icon: "", text: "Git, npm, jQuery, Bootstrap, Less, Gulp, Redmine or Jira, Webstorm or VisualStudio Code, Slack ;)" },
    ];
    return (
        <ul className="tech-stack-list">
            {techList.map(item => (
                <li key={item.tech} className="box dark">
                    <i className={item.icon}></i>
                    <code><strong>{item.tech}</strong>: {item.text}</code>
                </li>
            ))}
        </ul>
    );
};

export default TechStackBox;