import React from 'react'
import MenuItem from './MenuItem'

export default function MenuList({ menuList }) {
    return (
        <ul className="nav__list">
            {menuList.map( item => <MenuItem key={`menu-${item.label}`} linkInfo={item}/>)}
        </ul>
    )
}
