import React, { useEffect, useState } from "react";
import axios from "axios";

function IGDB() {

    const client_id = "udhq98141ovum93p6ozrdckh54qzxt";
    const client_secret = "ttbimp7qfzf9xh6lnx16qpwzz1rlop";

    const [token, setToken] = useState();
 
    useEffect(() => {
        const getToken = async () => {
            await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`)
            .then(res => {
                console.log(res.data.access_token);
                setToken(res.data.access_token);
            });
        }
        getToken();
        const apiCall = async () => {
            const response = await axios.post("http://0.0.0.0:8080/https://api.igdb.com/v4/games", {
                headers: {
                    "Client-ID" : client_id,
                    'Authorization': "Bearer " + token
                },
            });
            console.log(response); // WORKS!    
        }
        if (token != undefined) apiCall();
    }, [])

    return (
        <>

        </>
    )
}

export default IGDB;