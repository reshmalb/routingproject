import React from "react";
import { Link } from "react-router-dom";

const QuoteItem=(props)=>{
    return(
        <figure>
            <blockquote>
             <p> {props.id}</p>  
            </blockquote>

            <figcaption>
                {props.author}
            </figcaption>
            <Link to={`/quotes/${props.id}`}> view Full Screen</Link>
        </figure>
    )
}

export default QuoteItem;