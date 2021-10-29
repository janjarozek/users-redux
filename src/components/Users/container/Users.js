import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveLocalUsers } from '../redux'

import UsersCard from '../components/UsersCard'

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localUsers: JSON.parse(localStorage.getItem("users"))
        }
    }

    componentDidMount() {
        if (this.state.localUsers.length !== 0) {
            this.props.saveLocalUsers(this.state.localUsers);
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
        saveLocalUsers: data => dispatch(saveLocalUsers(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);