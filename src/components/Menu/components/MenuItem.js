import React from 'react'

import { NavLink } from "react-router-dom";

export default function MenuItem({ linkInfo }) {
    return (
        <li className="b-navigation__menulist__item">
            <NavLink to={linkInfo.to} activeClassName="b-navigation__menulist__item--active">{linkInfo.label}</NavLink>
        </li>
        // <li className="b-navigation__menulist__item">
        //     <NavLink to={linkInfo.to} activeClassName="b-navigation__menulist__item--selected">{linkInfo.label}</NavLink>
        // </li>
    )
}
