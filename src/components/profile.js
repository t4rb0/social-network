import React from "react";
import profilePic from "../images/profile.jpg"
import "./profile.css"
import Wall from "./posts/wall";

function Profile(props) {
    return (
        <div className="profile">
            <div className="profile-info">
                <img src={profilePic} className="profile-pic" />
                <div className="user-info">
                    <h2 className="user-info__name">Ivan Ivanov</h2>
                    <hr></hr>
                    <p className="user-info__about"><span>City: </span>Moscow</p>
                    <p className="user-info__about"><span>Age: </span>20</p>
                    <p className="user-info__about"><span>Education: </span>Moscow State University</p>
                </div>
            </div>
            <Wall posts = {props.posts}></Wall>
        </div>
    )
}
export default Profile
