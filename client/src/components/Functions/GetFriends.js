import React from "react";
import API from "../../utils/API";

export const GetFriends = async (userId) => {

    try {

        await API.getFriends(userId).then(res => console.log(res));

    } catch (err) {
        console.log(err)
    }
}