import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MainBody } from '../components/mainBody';
import { userActions } from '../actions';

const RootHomepage = styled.div`
    min-width: 300px;
    width: 100%;
    .RootHomepage__header{
        height: 15vh;
    }
    .RootHomepage__body{
        height: 85vh;
    }
`;
const toolbarProps = {
    // statusFilter,
    // todos,
    // onStatusFilterChange: handleStatusFilterChange,
    //scrolled,
    // onCompleteAll: handleCompleteAll,
    // onDeleteAll: handleDeleteAll,
}
class HomePage extends React.Component {
    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user } = this.props;

        return (
            <RootHomepage>
                <div className="RootHomepage__header">
                    <div>
                        <h1>Hi {user.userName}!</h1>
                        <p>You're logged in with React!!</p>
                    </div>
                    <div>
                        <Link to="/login">Logout</Link>
                    </div>
                </div>
                <div className="RootHomepage__body">
                    <MainBody />
                </div>
            </RootHomepage>
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