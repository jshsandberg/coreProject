import React from "react";
import Record from "../../assets/record.jpg";
import "./TitleMedia.css";

function TitleMedia() {


    return (
        <>
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <img className="image-filter" src={Record} />
                            <h3 className="title-font">Music Eats My Ass</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TitleMedia;