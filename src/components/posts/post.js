import React from "react";
import profilePic from "../../images/profile.jpg"
import {NavLink} from "react-router-dom"
function Post(props) {
    console.log(props)
    return (
        <div className="post">
            <div className="post__user-info">
                <img src={profilePic} className="post__image"></img>
                <NavLink to={`/users/${props.id}`} className="post__user-name">Ivan Ivanov</NavLink>
                <p className="post__date">02.04.2024</p>
            </div>
            <p className="post__text">{props.text}</p>
        </div>
    )
}
export default Post
