import React from "react";
import { NavLink } from "react-router-dom";


const MainNavigation =()=>{
    return(
  
        <header style={{backgroundColor:"orange",
        color:"white",
        padding:"2px",
        width:"100%",
        height:"5rem",
        display:" inline-flex"}}>
            <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/quotes'>AllQuotes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/newquote'>NewQuotes</NavLink>
                    </li>
                </ul>
            </nav>
            </div>
         

        </header>
     
      
    )
}

export default MainNavigation;