import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MainBody from '../components/mainBody';
import { userActions } from '../actions';

const listProps = {
    onScroll: handleScroll,
    todos: filteredTodos,
    toggleTodoStatus,
    deleteTodo,
}

const toolbarProps = {
    statusFilter,
    todos,
    onStatusFilterChange: handleStatusFilterChange,
    scrolled,
    onCompleteAll: handleCompleteAll,
    onDeleteAll: handleDeleteAll,
  }
class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.username}!</h1>
                <p>You're logged in with React!!</p>
                <MyDayBody listProps={listProps} toolbarProps={toolbarProps} />
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };