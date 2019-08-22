import { API_BASE_USER } from '../constants/api.constants';
import axios from 'axios';
export const userService = {
    login,
    logout,
    register
};

function login(userName, password) {
    return axios({
        url: `${API_BASE_USER}login`,
        method: 'POST',
        data: {
            "password": password,
            "userName": userName
        }
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userMemo');
}


function register(user) {
    return axios({
        url: `${API_BASE_USER}/signup`,
        method: 'POST',
        data: {
            "password": user.password,
            "userName": user.userName
        }
    });
}
