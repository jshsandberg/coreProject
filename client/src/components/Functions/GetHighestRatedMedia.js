import React from "react";
import API from "../../utils/API"

export const getHighestRatedMedia = async () => {
        try {
            await API.getMaxRatings().then(res => console.log(res));
        } catch (err) {
            console.log(err)
        };
    };