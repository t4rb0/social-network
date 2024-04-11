import React from "react";
import profilePic from "../../images/profile.jpg"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Msgs(props) {
    return (
        <>
            <div className="messages">
                <NavLink to={`/users/${props.id}`} className="messages__sender">{props.name}</NavLink>
                <br></br>
                <p className="messages__msg">{props.text}</p>
                <hr className="messages__hr"></hr>

                <div className="msg__profile-info">
                    <img src={profilePic} className="profile-pic" />
                    <div className="user-info">
                        <h2 className="user-info__name">{props.name}</h2>
                        <hr></hr>
                        <p className="user-info__about"><span>City: </span>{props.city}</p>
                        <p className="user-info__about"><span>Age: </span>{props.age}</p>
                        <p className="user-info__about"><span>Education: </span>{props.education}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Msgs