import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Navbar";

function App() {
  return (
    // <div>
    // <Nav/>
    // <Search/>
    // </div>
    
    <Router>
      <Nav/>
      <div>
        
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
         
          <Route component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
