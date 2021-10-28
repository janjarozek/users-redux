import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers, saveLocalUsers } from '../redux'

import UsersCard from '../components/UsersCard'

class Users extends Component {
    // constructor(props) {
    //     super(props);
    //     const state = {
    //     }
    // }
    componentDidMount() {
        const localUsers = JSON.parse(localStorage.getItem("users"));
        // const localUsers = localStorage.getItem("users");
        if (localUsers !== null) {
            // console.log('got local users');
            console.log(localUsers);
            saveLocalUsers(localUsers);
        } else {
            console.log('No users in local storage!')
        }
    }

    render() {
        const {users, isLoading, isError} = this.props;
        return (
            <div>
                {isLoading && <p>Loading users data...</p>}
                {isError && <p>An error occurred when fetching API data...</p>}
                {users.length === 0 && <p>Please go to Home page and load some users...</p>}
                {users.map( user =>
                    <UsersCard user={user} key={`user-${user.login.uuid}`} />
                )}
            </div>
        )
    }
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
        getUsers: amount => dispatch(getUsers(amount)),
        saveLocalUsers: data => dispatch(saveLocalUsers(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);