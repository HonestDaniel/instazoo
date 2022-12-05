import React from "react";

const TokenStorage = ({token, user}) => {

    const saveToken = (token) => {
        const TOKEN_KEY = 'auth-token';
        const USER_KEY = 'auth-user';
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    const getToken = () => {
        return sessionStorage.getItem(TOKEN_KEY);
    }

    const saveUser = (user) => {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    const getUser = () => {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    }

    const logOut = () => {
        window.sessionStorage.clear();
        window.location.reload();
    }
}