import React from 'react'

export default function UsersCard({user}) {
    // const {cell, dob, email, gender, id, location, login, name, nat, phone, picture, registered} = user;
    const { name, picture } = user;

    return (
        <div>
            <img src={picture.medium} alt={`Picture of ${name.first} ${name.last}`}></img>
            <p>{name.title} {name.first} {name.last}</p>
        </div>
    )
}
