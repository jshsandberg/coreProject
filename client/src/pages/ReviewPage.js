import React from "react";
import Header from "../components/Header/Header";
import HomeNavBar from "../components/NavBar/HomeNavBar";
import Review from "../components/Review/Review";
import SideNavBar from "../components/NavBar/SideNav";
import UserReview from "../components/Review/UserReview";


function ReviewPage(props) {


    return (
        <>
            <SideNavBar />
            <Review item={props.location.state} />
            <UserReview item={props.location.state} />
          
    
        </>
    )
};

export default ReviewPage;