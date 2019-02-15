import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../../../src/Components/Menu/menu.scss';
import {
    BrowserRouter,
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

// import Home from './Components/Home.jsx';
// import Blog from './Components/Blog.jsx';
// import Pricing from './Components/Pricing.jsx';

// const activeStyle = {
//     color: "#75ff08",
//     transform: "scale(1.4)",
//     textDecoration: "none",
// };

const Menu = () => {
    const links = [
        { name: "Tech stack", url: "/", exact: true, dropdown: false },
        { name: "WeekPlanner", url: "https://szymonwojcikowski.github.io/weekPlanner/", exact: true },
        { name: "About", url: "/about", exact: false, dropdown: false }
    ];

    // const submenu = [
    //     { name: "WeekPlanner", url: "https://szymonwojcikowski.github.io/weekPlanner/", exact: true }
    // ];

     return (
            <ul>
                {links.map(row => (
                    <li key={row.url}>
                        <NavLink
                            exact={row.exact}
                            to={row.url}
                            >
                            {row.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
    );
};




// const App = () => {
//     return (
//         <BrowserRouter>
//             <Fragment>
//                 <header>
//                     <h1>Witaj na mojej stronie</h1>
//                     <Menu />
//                 </header>
//                 <Switch>
//                     <Route exact path="/" component={Home} />
//                     <Route path="/blog" component={Blog} />
//                     <Route path="/pricing" component={Pricing} />
//                     <Route path="*" component={NotFound} />
//                 </Switch>
//             </Fragment>
//         </BrowserRouter>
//     );
// };

// {row.dropdown ? <ul className="dropdown">{submenu.map(row => (
//     <li key={row.url}>
//         <NavLink
//             exact={row.exact}
//             to={row.url}
//         >{row.name}</NavLink>
//     </li>))}</ul> : row.name}




export default Menu;