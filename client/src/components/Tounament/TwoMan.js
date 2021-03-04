import React, { useContext, useEffect } from "react";
import TwoBracket from "../../utils/Media/Bracket/2.jpg";
import { UserContext } from "../../context/userContext";


export default function TwoMan({ battle, childData }) {


    const {user, setUser} = useContext(UserContext);



    useEffect(() => {


    }, [childData])

    // console.log(childData)


    return (
        <>
            <img style={{transform: "rotate(90deg)", zIndex: "-1"}} src={TwoBracket} />
            <div>
                <h2 style={{position: "absolute", left: "115px"}}>{battle.fighterOne.username}</h2>
                {battle.fighterOne.username == user.username ? <img style={{ width: "75%", position: "absolute", left: "95px", top: "550px"}} src={childData.length > 0 ? childData.slice(-1)[0].image : null} /> : null}
                {battle.fighterOne.username == user.username ? <h3 style={{position: "absolute", top: "500px", left: "115px"}}>{childData.length > 0 ? childData.slice(-1)[0].name : null }</h3>: null}
            </div>
            <div>
                <h2 style={{position: "absolute", left: "300px"}}>{battle.fighterTwo.username}</h2>
                {battle.fighterTwo.username == user.username ? <img style={{ width: "75%", position: "absolute", left: "300px", top: "550px"}} src={childData.length > 0 ? childData.slice(-1)[0].image : null} /> : null}
                {battle.fighterTwo.username == user.username ? <h3 style={{position: "absolute", top: "500px", left: "300px"}}>{childData.length > 0 ? childData.slice(-1)[0].name : null }</h3>: null}
            </div>
        </>
    )
}