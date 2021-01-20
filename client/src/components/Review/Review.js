import React, { useState, useEffect } from "react";
import "../Functions/SpotifyFree";
import { getSpotifyAcess } from "../Functions/SpotifyFree";

function Review() {

    getSpotifyAccess("Linkin Park", "artist");


    return (
        <>

        </>
    )
};

export default Review;