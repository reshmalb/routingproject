import React, { Fragment } from "react";
import { Route, Switch} from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails"
import MainNavigation from "./Navigation/MainNavigation";
import NewQuote from "./pages/NewQuote";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <Fragment>
      <MainNavigation/>  
          <Switch>
          <Route path='/quotes'exact> <AllQuotes/></Route>
          <Route path='/quotes/:quoteid' ><QuoteDetails/></Route>
          <Route path='/newquote'  ><NewQuote/></Route>
          <Route path='*' ><NotFoundPage/></Route>

            </Switch>
          
    
    </Fragment>
     
  );
}

export default App;
