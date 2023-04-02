import React, { Fragment, useState } from "react";
import { Prompt } from "react-router-dom";


const QuoteForm=(props)=>{
    const[author,setAuthor]=useState();
    const [text,seText]=useState();
    const [isEntering,setIsEntering]=useState(false)

    const authorChangeHandler=(e)=>{
        setAuthor(e.target.value)
    }
    const textChangeHandler=(e)=>{
        seText(e.target.value)
    }
    const onFocusHandler=()=>{
        setIsEntering(true)
    }


    const onSubmitHandler=()=>{
          const newQuote={
            author:author,
            text:text
          }
               
          props.onAddQuote(newQuote)
    }
    const finishEnteringHandler=()=>{
        setIsEntering(false)
    }
    return(
        <Fragment>
            <Prompt when={isEntering}
            message={(location)=>'Are you sure want to leave? All your entered data is lost!! '}/>
       <div style={{marginLeft:"50%",
        marginTop:"4rem",
        width:"300px",
        height:"400px"}}>

            <form onFocus={onFocusHandler} onSubmit={onSubmitHandler}>
                <label>author</label>
                <input  type="text" onChange={authorChangeHandler} value={author}></input>
                <label >text</label>
                <input  type="text" style={{width:"3rem"}}
                onChange={textChangeHandler} value={text}></input>
                <button  type="submit" onClick={finishEnteringHandler}>Add new quote</button>
            </form>
         </div>
    </Fragment>
    
    )
}

export default QuoteForm;