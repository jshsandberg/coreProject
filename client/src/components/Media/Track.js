import React, { useState } from "react";

function Media(props) {

    console.log(props);

    const [media, setMedia] = useState(props.media.tracks)

   
    return (
        <>
            {media.items.map((items, i) => {
                return (
                    <>
                        <h1>{items.name}</h1>
                    </>
                )
            })}
        </>
    )
    

};

export default Media;