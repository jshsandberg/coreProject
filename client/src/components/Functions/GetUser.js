import { resolve } from "path";
import React from "react";
import API from "../../utils/API";


export const getUserData = async (values) => {
    try {

        const foundUser = {}

        if (values === null) {
            foundUser["user"] =  "Not all fields have been entered";
            console.log("values")
            return foundUser.user 
        } else {

            const newUser = {
                username: values.username,
                password: values.password,
            }
            await API.loginUser({
                username: newUser.username,
                password: newUser.password,
            })
            .then(res => {
                foundUser["user"] = res.data;
                localStorage.setItem("auth-token", res.data.token)
            });

            return foundUser.user;
        }

    } catch(err) {
        console.log(err)
    }
};
