import React, { Fragment } from "react";
import { Route, Routes ,Switch} from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails"
import MainNavigation from "./Navigation/MainNavigation";
import NewQuote from "./pages/NewQuote";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <Fragment>
      <MainNavigation/>
      <Routes>       
          <Route path='/quotes' element={<AllQuotes/>}></Route>
          <Route path='/quotes/:quoteid'  element={<QuoteDetails/>}></Route>
          <Route path='/newquote'  element={<NewQuote/>} ></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
       </Routes>

    
    </Fragment>
     
  );
}

export default App;
