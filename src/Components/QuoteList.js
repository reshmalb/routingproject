import React from "react";
import QuoteItem from "./QuoteItem";

const QuoteList=(props)=>{
    return(
        <div>
            <ul>
            {props.quotes.map((quote)=>{

               return( <QuoteItem 
                    key={quote.id}
                     id={quote.id}
                     author={quote.author}
               
                />)
            })}
            </ul>
      

      
        </div>
    )
}

export default QuoteList;