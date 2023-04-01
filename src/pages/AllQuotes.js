import React from "react";
import QuoteList from "../Components/QuoteList";

const Dummy=[
    {id:'a1',author:'reshma',text:'React is Fun'},
    {id:'a2',author:'renu',text:"REact is Awesome"}
]



const AllQuotes=()=>{
    return(
        <div  style={{marginTop:"4rem",
        marginLeft:"4rem"}}>
            AllQuotes
            <QuoteList  quotes={Dummy}></QuoteList>
        </div>
    )
    
}
export default AllQuotes;