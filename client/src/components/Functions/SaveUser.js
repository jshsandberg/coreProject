import React, { useState } from "react";
import API from "../../utils/API";


export const saveUserData = async (values) => {


    const savedUser = {};
    const error = {}

    try {
        const newUser = {
            username: values.username,
            password: values.password,
            name: values.firstname + " " + values.lastname,
            email: values.email
        };
        await API.saveuser(newUser).then( res => {
            if (res.stats !== 200) {
                API.loginUser({
                        username: newUser.username,
                        password: newUser.password,
                    })
                    .then(res => {
                        console.log(res)
                        localStorage.setItem("auth-token", res.data.token)
                        savedUser["user"] = res.data.user
                        
                        // Push the entire information of the user and all its friends data
                        // history.push({
                        //     pathname: "/home",
                        // });
                    });
            };
        });        
    }
    catch(err)  {
        error["error"] = (err.response.data.msg);
        return error;
    };

    return savedUser;
};