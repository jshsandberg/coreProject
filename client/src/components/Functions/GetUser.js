import { resolve } from "path";
import React from "react";
import API from "../../utils/API";


export const getUserData = async (values) => {
    try {
        const foundUser = {}

        const newUser = {
            username: values.username,
            password: values.password,
        }
        await API.loginUser({
            username: newUser.username,
            password: newUser.password,
        })
        .then(res => {
            foundUser["user"] = res.data.user;
            foundUser["modal"] = true
            localStorage.setItem("auth-token", res.data.token)
        });

        return foundUser;

    } catch(err) {
        console.log(err)
    }
};
