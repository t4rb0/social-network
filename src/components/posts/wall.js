import React from "react";
import Post from "./post";
function Wall(props) {
    return (
        <div className="feed">
            <h2 className="feed__title">Ivan's posts</h2>
            <textarea className="feed__input" type="text" placeholder="What's new?" />
            <br></br>
            <button className="feed__btn">add post</button>

            {props.posts.map((item)=><Post text={item.text} id={item.id}></Post>)}
        </div>
    )
}
export default Wall