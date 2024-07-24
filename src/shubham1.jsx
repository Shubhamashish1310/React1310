// import { useState } from "react";

import { useState } from "react"

function Sort() {
let [number,setcount]= useState(0)

function inc(){
   setcount((number+1)>50?50:(number+1))
}
function dec(){
    setcount((number-1)<0 ? 0 : (number-1))
}

    return(
        <>
        <h1>Count:{number}</h1>
        <button style={{backgroundColor:"red",width:"100px",height:"30px",color:"white"}} onClick={inc}>inc</button>
        <br />
        <button style={{backgroundColor:"blue",width:"100px",height:"30px",color:"white"}} onClick={dec}>dec</button>
    </>
        
    )
}

export default Sort