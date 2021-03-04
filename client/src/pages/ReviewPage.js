import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import Header from "../components/Header/Header";
// import HomeNavBar from "../components/NavBar/HomeNavBar";
import Review from "../components/Review/Review";
import SideNavBar from "../components/NavBar/SideNav";
import UserReview from "../components/Review/UserReview";
import Header from "../components/Header/Header";
import Container from "react-bootstrap/esm/Container";
import Charcoal from "../utils/Media/Charcoal.jpg";
import Footer from "../components/Footer/Footer";



function ReviewPage(props) {

    const history = useHistory();

    const [isLoading, setIsLoading] = useState(true);

    console.log(props)

    useEffect(() => {
        if (props.location.state === null || props.location.state === undefined) {
            history.push({pathname: "/"})
        } else {
            setIsLoading(false)
        }
    }, []);


    return (
        <>
         {!isLoading &&
            <>
            <Header />
            <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                <Review item={props.location.state} />
                <UserReview item={props.location.state} />
                <br></br>
                <br></br>
            </Container>
            <Footer />
       </>
}
          
    
        </>
    )
};

export default ReviewPage;