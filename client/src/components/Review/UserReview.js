import React, { useState, useEffect } from "react";
import { GetReview } from "../Functions/GetReview";

function UserReview ({ item }) {

    const [spotifyId, setSpotifyId] = useState(item.item.id);
    const [reviewArr, setReviewArr] = useState([]);

    useEffect(() => {
        const asyncReview = async () => {
            if (spotifyId) {
                const { response } = await GetReview(spotifyId);
                //console.log(response)

                // const arr = []

                // for(let i = 0; i < response.length; i++) {
                //     let reviewObj = {
                //         username: response[i].username,
                //         review: 
                //     }
                //     arr.push(response[i])
                // }

                // console.log(arr)
            }   
        }
        asyncReview();
    }, [])

    return (
        <>
            <h1>Hello</h1>
        </>
    )
};

export default UserReview;