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
    const [type, setType] = useState("track");
    const [name, setName] = useState("Track");

    const getSpotifyData = async () => {
        const returnedData = await getSpotifyAccess(value);
        console.log(returnedData)
        history.push({pathname: `/media`, state: returnedData});
    }

    const getVideoGameData = () => {
        
    }
    


    return (
        <>
            <InputGroup className="mb-3">
                <FormControl onChange={(e) => setValue(e.target.value)} aria-describedby="basic-addon1" />
                <Button onClick={() => {type === "videogame" ? getVideoGameData() : getSpotifyData()}} style={{backgroundColor: "black", borderColor: "black"}}>Search</Button>
            </InputGroup>
        </>
    )
};

export default SearchBar;