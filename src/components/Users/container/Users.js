import React, {useState, useEffect} from 'react'

import UsersCard from '../components/UsersCard'

export default function Users() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://randomuser.me/api/?results=10');
        if (response.ok) {
            const data = await response.json();
            setUsers(data.results);
            console.log(data.results);
        } else {
            console.error("Error occured! See response: ", response);
        }
    }

    useEffect( () => {
        getUsers();
    }, []);

    return (
        <div>
            {!users && <p>Loading users data...</p>}
            {users.map( user =>
                <UsersCard user={user} key={user.id} />
            )}
        </div>
    )
}
