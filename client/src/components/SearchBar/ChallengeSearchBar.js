import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import { getSpotifyAccess } from "../Functions/SpotifyFree";
import Media from "../Media/Media";

function ChallengeSearchBar() {

    const [value, setValue] = useState();
    const [type, setType] = useState("track");
    const [name, setName] = useState("Track");
    const [data, setData] = useState();

    const getSpotifyData = async () => {
        const returnedData = await getSpotifyAccess(value);
        setData(returnedData)
    }

  


    return (
        <>
            <InputGroup className="mb-3">
                <FormControl onChange={(e) => setValue(e.target.value)} aria-describedby="basic-addon1" />
                <Button onClick={() => getSpotifyData()} style={{backgroundColor: "black", borderColor: "black"}}>Search</Button>
            </InputGroup>

            {data && <Media media={data} />}
        </>
    )
};

export default ChallengeSearchBar;