import React from 'react'

import { connect } from 'react-redux'
import { getUsers, getRandomUsers, resetUsers } from '../../Users/redux'

import Button from '../components/Button'
import HomeHeader from '../components/HomeHeader'

import '../containers/Home.scss'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoadButton = () => {
            this.props.getRandomUsers();
        }

        this.handleAddButton = () => {
            this.props.getUsers(1);
        }

        this.handleResetButton = () => {
            if (this.props.users.length === 0) {
                console.log('Users array already empty!');
            } else {
                this.props.resetUsers();
            }
        }
    }
    render() {
        return (
            <div>
                <HomeHeader text="Choose what to do with the users list." />
                <Button label="Load 10 random users" handler={this.handleLoadButton}/>
                <Button label="Reset" handler={this.handleResetButton}/>
                <Button label="Add 1 user" handler={this.handleAddButton}/>
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
        getUsers: (amount) => dispatch(getUsers(amount)),
        getRandomUsers: () => dispatch(getRandomUsers()),
        resetUsers: () => dispatch(resetUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);