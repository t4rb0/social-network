import React from "react";
import '../App.css';
import '../messanger.css'
import Msg from "./msg";
let message = [{name:"Alexey Alexeev",text:"awbeasebwabebwaeb"},{name:"Ivan Ivanov", text:"2aseddasdawbvrbwavebawevb"},{name:"Alexey Alexeev",text:"gtfghfghghfhfg"},{name:"Ivan Ivanov", text:"4543643646"},{name:"Alexey Alexeev",text:"nnbvnbvnvbnvnbvn"},{name:"Ivan Ivanov", text:"uyyuttyutrrt"}]

function Messanger(){
    return(
        <div className="messanger">
            {message.map((item)=><Msg name={item.name} text={item.text}></Msg>)}
        </div>
    )
}
export default Messanger