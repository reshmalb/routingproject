import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import HighLightedCode from "../Components/Highlightedquote";
const Dummy=[
    {id:'a1',author:'reshma',text:'React is Fun'},
    {id:'a2',author:'renuka',text:"React is Awesome"}
]

const QuoteDetails=()=>{
    const params=useParams();
   const quote=Dummy.find(quote=>quote.id===params.quoteid)
   if(!quote){
   return <p>No quotes found</p>
   }


    return(
        <Fragment>
            <div style={{marginLeft:"50%",
                     marginTop:"4rem",
                     width:"300px",
                     height:"400px"
                }}>                    
            Quart Detail Page
            <HighLightedCode text={quote.text} author={quote.author}></HighLightedCode>
            <p>{params.quoteid}</p>
            </div>
        
        </Fragment>
    )
}

export default QuoteDetails