import React from 'react'

import { NavLink } from "react-router-dom";

export default function MenuItem({ linkInfo }) {
    return (
        <li className="nav__list__item">
            <NavLink to={linkInfo.to} activeClassName="nav__list__item--active">{linkInfo.label}</NavLink>
        </li>
    )
}
