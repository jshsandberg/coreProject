import React from "react";
// import Header from "../components/Header/Header";
// import HomeNavBar from "../components/NavBar/HomeNavBar";
import Review from "../components/Review/Review";
import SideNavBar from "../components/NavBar/SideNav";
import UserReview from "../components/Review/UserReview";
import Header from "../components/Header/Header";
import Container from "react-bootstrap/esm/Container";
import Charcoal from "../utils/Media/Charcoal.jpg";



function ReviewPage(props) {


    return (
        <>
            <Header />
            <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                <Review item={props.location.state} />
                <UserReview item={props.location.state} />
            </Container>
       
          
    
        </>
    )
};

export default ReviewPage;