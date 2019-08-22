import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';


const helpBlock = {
    color: 'red',
    fontSize: '14px'
}
class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                userName: '',
                password: '',
                rePassword: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.userName && user.password && user.password === user.rePassword) {
            this.props.register(user);
        }
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3 bg-white m-5 ">
                <h2 className="text-center">Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.userName ? ' has-error' : '')}>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" className="form-control" name="userName" value={user.userName} onChange={this.handleChange} />
                        {submitted && !user.userName &&
                            <div style={helpBlock}>UserName is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div style={helpBlock}>Password is required</div>
                        }
                    </div>

                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" className="form-control" name="rePassword" value={user.rePassword} onChange={this.handleChange} />
                        {submitted && user.password && user.rePassword && (user.rePassword !== user.password) &&
                            <div style={helpBlock}>Confirm password does not match with password</div>
                        }

                        {submitted && !user.rePassword &&
                            <div style={helpBlock}>Confirm Password is required</div>
                        }
                    </div>

                    <div className="form-group d-flex justify-content-center">
                        <button className="btn btn-primary w-100">Register</button>
                        <Link to="/login" className="btn btn-link w-100">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };