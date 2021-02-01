import React, { useState, useEffect } from "react";
import { GetReview } from "../Functions/GetReview";

function UserReview ({ item }) {

    const [spotifyId, setSpotifyId] = useState(item.item.id);
    const [reviewArr, setReviewArr] = useState([]);

    useEffect(() => {
        const asyncReview = async () => {
            if (spotifyId) {
                const response = await GetReview(spotifyId);
                setReviewArr(response)
            }   
        }
        asyncReview();
    }, [])

    return (
        <>
            {reviewArr && reviewArr.map((items, i) => {
                return (
                    <>
                        <h2>{items.username}: {items.review.review}</h2>
                    </>
                )
            })}
        </>
    )
};

export default UserReview;