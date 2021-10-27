import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getUsers, saveUsersInState } from '../redux'

import UsersCard from '../components/UsersCard'

function Users( props ) {
    const {users, isLoading, isError, getUsers} = props;

    useEffect( () => {
        // getUsers(1);
    }, []);

    return (
        <div>
            {/* {isLoading && <p>Loading users data...</p>}
            {isError && <p>An error occured when fetching API data...</p>} */}
            {users.length === 0 && <p>Please go to Home page and load some users...</p>}
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
        getUsers: (amount) => dispatch(getUsers(amount)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);