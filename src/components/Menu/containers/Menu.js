import React from 'react'
import MenuList from '../components/MenuList'

import '../../../_sass/styles.scss'

const menu = [
    { to:'/home', label:'home' },
    { to:'/users', label:'users' },
    { to:'/contact', label:'contact' },
];

export default function Menu() {
    return (
        <nav className="b-navigation">
            <MenuList menuList={menu}/>
        </nav>
    )
}
