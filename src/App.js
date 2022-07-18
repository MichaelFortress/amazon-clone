import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import Header from "./Header";
import Login from  "./Login"
import Home from "./Home";
import './App.css';
import Checkout from "./Checkout";

function App() {
  //BEM
  return (
    <Router>
        <div className="App">
        
            <Switch> 
                {/* <Route path="/login"> <Login /></Route> 
            
                <Route path="/"><Header /> <Home />   </Route>
              
                <Route path="/Checkout"><Header /> <Checkout /> </Route> */}
            <Route path="/login">
            <Login />

          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
       
          <Route path="/">
            <Header />
            <Home />
          </Route>

            </Switch>
          
        </div>
    </Router>
      
  );
};

export default App;
