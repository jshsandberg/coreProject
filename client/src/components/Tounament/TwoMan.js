import React, { useContext, useEffect } from "react";
import TwoBracket from "../../utils/Media/Bracket/2.jpg";
import { UserContext } from "../../context/userContext";


export default function TwoMan({ players, childData }) {

    const {user, setUser} = useContext(UserContext);

    useEffect(() => {

        console.log("rerender")
    }, [childData])

    console.log(childData)


    return (
        <>
            <img style={{transform: "rotate(90deg)", zIndex: "-1"}} src={TwoBracket} />
            <div>
                <h2 style={{position: "absolute", left: "115px"}}>{players[0]}</h2>
                {players[0] == user.username ? <img style={{ width: "75%", position: "absolute", left: "300px", top: "450px"}} alt="img" src={childData.length > 0 ? childData.slice(-1)[0].image : null} /> : null}
                {players[0] == user.username ? <h3 style={{position: "absolute", top: "400px", left: "300px"}}>{childData.length > 0 ? childData.slice(-1)[0].name : null }</h3>: null}
            </div>
            <div>
                <h2 style={{position: "absolute", left: "300px"}}>{players[1]}</h2>
                {players[1] == user.username ? <img style={{ width: "75%", position: "absolute", left: "300px", top: "550px"}} alt="img" src={childData.length > 0 ? childData.slice(-1)[0].image : null} /> : null}
                {players[1] == user.username ? <h3 style={{position: "absolute", top: "500px", left: "300px"}}>{childData.length > 0 ? childData.slice(-1)[0].name : null }</h3>: null}
            </div>
        </>
    )
}