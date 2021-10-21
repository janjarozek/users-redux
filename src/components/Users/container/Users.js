import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../redux'

import UsersCard from '../components/UsersCard'

function Users( props ) {
    const {users, isLoading, isError, getUsers} = props;

    useEffect( () => {
        getUsers()
    }, []);

    return (
        <div>
            {isLoading && <p>Loading users data...</p>}
            {isError && <p>An error occured when fetching API data...</p>}
            {users.map( user =>
                <UsersCard user={user} key={`user-${user.login.uuid}`} />
            )}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        users: state.usersReducer.users,
        isLoading: state.usersReducer.isLoading,
        isError: state.usersReducer.isError
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(getUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);