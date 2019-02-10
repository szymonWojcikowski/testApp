import {Fragment} from "react";
import {Link} from "react-router-dom";
import React from "react";

const NotFound = () => {
    return (
        <Fragment>
            <h2>Podana podstrona nie istnieje</h2>
            <Link exact to="/">
                Wyświetl stronę główną
            </Link>
        </Fragment>

    )
};

export default NotFound;