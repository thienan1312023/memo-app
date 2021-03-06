import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { userActions } from '../actions';


const RootLogin = styled.div`
    width: 30%;
    min-width: 300px;
    background-color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    .root-login__title{
        text-align: center
    }
    .root-login__button-container{
        display: flex;
        flex-direction: column;
    }
    .root-login__help-block{
        color: red;
        font-size: 14px;
    }
`;
class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            userName: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { userName, password } = this.state;
        if (userName && password) {
            this.props.login(userName, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { userName, password, submitted } = this.state;
        return (
            <RootLogin>
                <h2 className="root-login__title">Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !userName ? ' has-error' : '')}>
                        <input type="text"
                            className="form-control"
                            name="userName"
                            value={userName}
                            placeholder="User Name"
                            onChange={this.handleChange} />
                        {submitted && !userName &&
                            <div className="root-login__help-block">User Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <input type="password" 
                               className="form-control" 
                               name="password" 
                               value={password}  
                               placeholder="Password" 
                               onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="root-login__help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group root-login__button-container">
                        <button className="btn btn-primary">Login</button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </RootLogin>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };