import React from "react";
import API from "../../utils/API";

export const GetFriends = async (userId) => {

    const response = {}

    try {

        await API.getFriends(userId).then(res => response["friends"] = res.data);

        return response
    } catch (err) {
        console.log(err)
    }
}