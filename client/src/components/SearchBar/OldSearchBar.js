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
        const returnedData = await getSpotifyAccess(value, type);
        console.log(returnedData)
        // history.push({pathname: `/media/${type}`, state: returnedData});
    }

    const getVideoGameData = () => {
        
    }
    


    return (
        <>
            <InputGroup className="mb-3">
                <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title={name}
                    id="input-group-dropdown-1"
                    style={{background: "#db3d44", borderColor: "#db3d44", color: "white"}}
                >
                    <Dropdown.Item onClick={() => {setType("track"); setName("Track")}}>Track</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setType("artist"); setName("Artist")}}>Artist</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setType("album"); setName("Album")}}>Album</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setType("videogame"); setName("Video Game")}}>Video Game</Dropdown.Item>
                </DropdownButton>
                <FormControl onChange={(e) => setValue(e.target.value)} aria-describedby="basic-addon1" />
                <Button onClick={() => {type === "videogame" ? getVideoGameData() : getSpotifyData()}} style={{backgroundColor: "#db3d44", borderColor: "#db3d44"}}>Search</Button>
            </InputGroup>
        </>
    )
};

export default SearchBar;