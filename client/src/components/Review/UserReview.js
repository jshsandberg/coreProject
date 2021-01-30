import React, { useState, useEffect } from "react";
import { GetReview } from "../Functions/GetReview";

function UserReview ({ item }) {

    const [spotifyId, setSpotifyId] = useState(item.item.id)

    useEffect(() => {
        if (spotifyId) {
        GetReview(spotifyId);
        }
    }, [])

    return (
        <>
            <h1>Hello</h1>
        </>
    )
};

export default UserReview;