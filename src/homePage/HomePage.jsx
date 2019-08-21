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
        height: 120px;
        display: flex;
        justify-content: space-between;
        padding: 20px;
        background: linear-gradient(to right, #243B55, #141E30);
        .RootHomepage__header__greeting, .RootHomepage__header__intro {
            font-size: 30px;    
            font-family: cursive;
            color: white
        }
    }
    .RootHomepage__body{
        height: calc(100vh - 120px);
    }
`;
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
                        <h1 className="RootHomepage__header__greeting">Hi {user.userName}!</h1>
                        <span className="RootHomepage__header__intro">Your memos is here !!!</span>
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