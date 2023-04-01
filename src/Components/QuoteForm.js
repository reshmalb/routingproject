import React, { useState } from "react";


const QuoteForm=(props)=>{
    const[author,setAuthor]=useState();
    const [text,seText]=useState();

    const authorChangeHandler=(e)=>{
        setAuthor(e.target.value)
    }
    const textChangeHandler=(e)=>{
        seText(e.target.value)
    }


    const onclickhandler=()=>{
          const newQuote={
            author:author,
            text:text
          }
                    props.onAddQuote(newQuote)
    }
    return(
        <div style={{marginLeft:"50%",
        marginTop:"4rem",
        width:"300px",
        height:"400px"}}>

            <form>
                <label>author</label>
                <input  type="text" onChange={authorChangeHandler} value={author}></input>
                <label >text</label>
                <input  type="text" style={{width:"3rem"}}
                onChange={textChangeHandler} value={text}></input>
                <button  type="submit" onClick={onclickhandler}>Add new quote</button>


            </form>

            </div>

    )
}

export default QuoteForm;