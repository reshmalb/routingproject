import React from "react";

const HighLightedCode=(props)=>{

   return(
    <div style={{marginLeft:"50%",
    marginTop:"4rem",
    width:"300px",
    height:"400px"}}>
        <h1>{props.text}</h1>
        <h4>{props.author}</h4>
    </div>

   )

}

export default HighLightedCode;