import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import WriteReview from "../components/Review/WriteReview";

function WriteReviewPage(props) {

    return (
        <>
            <WriteReview item = {props.location.state} />
        </>
    )
};

export default WriteReviewPage;