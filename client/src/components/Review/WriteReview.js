import React, { useState, useContext } from "react";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import { SaveReview } from "../Functions/SaveReview";
import { UserContext } from "../../context/userContext";


function WriteReview(props) {

    console.log(props);

    const {user, setUser} = useContext(UserContext);
    const [value, setValue] = useState("");

    return (
        <>
      <form onSubmit={(e) => SaveReview(e, value, user, props.item.id)}>
                <label>Review:
                    <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />   
            </form>               
        </>
    )
};

export default WriteReview;