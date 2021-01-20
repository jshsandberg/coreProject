import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import "../Functions/SpotifyFree";
import { getSpotifyAccess } from "../Functions/SpotifyFree";


function SearchBar() {

    const history = useHistory();

    const [value, setValue] = useState();
    const [type, setType] = useState("Track");
    const [data, setData] = useState();

    const getSpotifyData = async () => {
        const returnedData = await getSpotifyAccess(value, type);
        await setData(returnedData);
        history.push({pathname: "/media", state: data})
    }

    const getVideoGameData = () => {
        
    }
    


    return (
        <>
            <InputGroup className="mb-3">
                <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title={type}
                    id="input-group-dropdown-1"
                    style={{background: "#db3d44", borderColor: "#db3d44", color: "white"}}
                >
                    <Dropdown.Item onClick={() => setType("Track")} name="Track">Track</Dropdown.Item>
                    <Dropdown.Item onClick={() => setType("Artist")} name="Artist">Arist</Dropdown.Item>
                    <Dropdown.Item onClick={() => setType("Album")} name="Album">Album</Dropdown.Item>
                    <Dropdown.Item onClick={() => setType("Video Game")} name="Video Game">Video Game</Dropdown.Item>
                </DropdownButton>
                <FormControl onChange={(e) => setValue(e.target.value)} aria-describedby="basic-addon1" />
                <Button onClick={() => {type === "Video Game" ? getVideoGameData() : getSpotifyData()}} style={{backgroundColor: "#db3d44", borderColor: "#db3d44"}}>Search</Button>
            </InputGroup>
        </>
    )
};

export default SearchBar;