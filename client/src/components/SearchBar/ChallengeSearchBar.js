import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import { getSpotifyAccess } from "../Functions/SpotifyFree";
import { Track } from "../Media/Track";
import Album from "../Media/Album";
import Artist from "../Media/Artist";

function ChallengeSearchBar({getChildData}) {

    const [value, setValue] = useState();
    const [data, setData] = useState(null);

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
            <Container>
                { data &&
                    <>
                        <Track getChildData={getChildData} media={data} />
                        <Album getChildData={getChildData} media={data} />
                        <Artist getChildData={getChildData} media={data} />
                    </>
                }
            </Container>

        </>
    )
};

export default ChallengeSearchBar;