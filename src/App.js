import React from "react";
// Module not found: Error: Can't resolve 'react-router-dom' in '/home/pmm/Development/code/phase-2/movies-hub/src'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Popular from "./components/Popular";
import MyFavorites from "./components/MyFavorites";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import NotFound from "./components/NotFound";


// import {  Route, Switch , BrowserRouter as Router } from "react-router-dom";
const Route = Requirements.Route;
const Switch = Requirements.Switch;



const  App =()  => {
  const handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  return (
      <Router >
        <div className="App">
          <Route
            render={props => (
              <Header
                handleSubmit={handleSubmit}
                history={props.history}
              />
            )}
          />
          
          <Switch>
          < Route path="/" exact component={Home} />
          < Route path="/popular" exact component={Popular} />         
          < Route path="/myFavorites" exact component={MyFavorites} />
           
            <Route
              path="/search/:searchInput"
              render={props => (               
                <MovieList searchTerm={props.match.params.searchInput} />
              )}
            />
            <Route exact={true}  component={NotFound} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;




