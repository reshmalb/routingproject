import React, { Fragment } from "react";
import QuoteItem from "./QuoteItem";
import { useHistory,useLocation } from "react-router-dom";

const sortQuotes=(quotes,ascending)=>{
    return quotes.sort((quoteA,quoteB)=>{
        if(ascending){
            return quoteA.id > quoteB.id ? 1:-1;
        }else{
            return quoteA.id < quoteB.id ? 1:-1;
        }
    }) 
};



const QuoteList=(props)=>{
const history=useHistory();
const location=useLocation();
const queryParams=new URLSearchParams(location.search)
const isSortAscending=queryParams.get('sort')==='asc'
const sortedQuotes=sortQuotes(props.quotes,isSortAscending)

const changeSoringHandler=()=>{
  history.push('/quotes?sort='+(isSortAscending ?'desc':'asc'))

}

    return(
        <Fragment>
         <div>
                <button  onClick={changeSoringHandler}>
                 Sort {isSortAscending ? 'Descending' : 'Ascending'}
                </button>
            <ul>
            {sortedQuotes.map((quote)=>{

               return( <QuoteItem 
                    key={quote.id}
                     id={quote.id}
                     author={quote.author}
               
                />)
            })}
            </ul>
                  
        </div>
        </Fragment>
    
      


    )
}

export default QuoteList;