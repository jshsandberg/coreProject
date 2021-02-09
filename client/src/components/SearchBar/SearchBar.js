import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import { getSpotifyAccess } from "../Functions/SpotifyFree";


function SearchBar({ color }) {

    const history = useHistory();

    const [value, setValue] = useState();

    const getSpotifyData = async () => {
        const returnedData = await getSpotifyAccess(value);
        history.push({pathname: `/media`, state: returnedData});
    }

    const black = {
        backgroundColor: "#464646", 
        borderColor: "#464646"
    }

    const red = {
        backgroundColor: "#db3d44", 
        borderColor: "#db3d44"
    }

    return (
        <>
            <InputGroup className="mb-3">
                <FormControl onChange={(e) => setValue(e.target.value)} aria-describedby="basic-addon1" />
                <Button onClick={() => getSpotifyData()} style={color === "red" ? red : black}>Search</Button>
            </InputGroup>
        </>
    )
};

export default SearchBar;