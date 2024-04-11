import React from "react";
import '../App.css';
import '../messanger.css'

function Msg(props) {
    return (
        <div className="messanger__message">
            <h2 className="message__name">{props.name}</h2>
            <p className="message__text">{props.text}</p>
        </div>
    )
}
export default Msg