import { API_BASE_USER } from '../constants/api.constants';
export const userService = {
    login,
    logout,
    register
};

function login(username, password) {
    axios({
        url: `${API_BASE_USER}login`,
        method: 'POST',
        data: {
            "password": password,
            "userName": username
        }
    }).then(
        res => {
            if (res.status === 200) {
                localStorage.setItem('token', res.data.token);
            }
        }
    )
        .catch(
            err => {
                if (err) {
                    if (err.response.status === 401) {
                        this.setState({
                            isLoginFail: true
                        })
                    }
                }
            }
        )
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
}

function register(user) {
    axios({
        url: `${this.props.baseURL}/api/user/signup`,
        method: 'POST',
        data: {
            "password": user.password,
            "userName": user.username
        }
    })
        .then(
            res => {
                if (res.status === 201) {
                    console.log('Register succuessfuly')
                }
            }
        )
        .catch(
            err => {
                console.log(err);
            }
        )
}
