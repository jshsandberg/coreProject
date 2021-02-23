import React, { useState } from "react";
import API from "../../utils/API";



export const saveUserData = async (values) => {

    const savedUser = {};
    const error = {}

    try {
        const newUser = {
            username: values.username || null,
            password: values.password || null,
            name: values.firstname + " " + values.lastname || null,
            email: values.email || null
        };
        await API.saveuser(newUser).then( async res => {
            if (res.stats !== 200) {
                await API.loginUser({
                        username: newUser.username,
                        password: newUser.password,
                    })
                    .then(async res => {
                        await localStorage.setItem("auth-token", res.data.token)
                        savedUser["user"] = res.data.user;       
                    });
            };
        });        
    }
    catch(err)  {
        console.log(err.response.data.msg)
        return error["mes"] = err.response.data.msg
    };
   
        return savedUser.user;
    
};