import React from "react";
import { getHighestRatedMedia } from "../Functions/GetHighestRatedMedia";

export default function HighestRateMedia() {

    return (
        <>
            <button onClick={() => getHighestRatedMedia()}>HELLO</button>
        </>
    )
}