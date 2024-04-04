import React from "react";
import profilePic from "../images/profile.jpg"
import "./profile.css"
function Profile() {
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
            <div className="feed">
                <h2 className="feed__title">Ivan's posts</h2>
                <textarea className="feed__input" type="text" placeholder="What's new?" />
                <br></br>
                <button className="feed__btn">add post</button>
                <div className="post">
                    <div className="post__user-info">
                        <img src={profilePic} className="post__image"></img>
                        <p className="post__user-name">Ivan Ivanov</p>
                        <p className="post__date">02.04.2024</p>
                    </div>
                    <br></br>
                    <p className="post__text">some text</p>
                </div>
            </div>
        </div>
    )
}
export default Profile

// Дописать стили профилю.