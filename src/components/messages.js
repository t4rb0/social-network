import React from "react";
import Msgs from "./messages/msgs";
import "./messages.css"
import Profile from "./profile";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import profilePic from "../images/profile.jpg"
import "./profile.css"
let messages = [{text:"sdererre",name:"Alexey Alexeev", city:"Moscow",age:21,education:"Moscow State University",id:1},{text:"hfgfghvbndcxds",name:"Ivan Alexdranovich",age:20,city:"Moscow",education:"Moscow State University",id:2},{text:"lkjkluiyiykh",name:"Sergey Sergeev",age:19,city:"Moscow",education:"Moscow State University", id:3}]
function Messages() {
    return (
        <div className="profile1">
            {messages.map((item)=><Msgs name={item.name} text={item.text} city={item.city} age={item.age} education={item.education} id={item.id} ></Msgs>)}
        </div>
    )
}
export default Messages