import React from "react";
import QuoteForm from "../Components/QuoteForm";
//import {useHistory} from "react-router"
import { useNavigate } from "react-router-dom";

const NewQuote=()=>{
    const navigate=useNavigate();


const addQuoteHandler=(newQuote)=>{

    console.log(newQuote)
navigate('/quotes')

}



    return(
        <div style={{marginLeft:"50%",
        marginTop:"5rem",
        width:"300px",
        height:"400px"
                           }}>
            <QuoteForm onAddQuote={addQuoteHandler}  />
        </div>
    )
}

export default NewQuote;