import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Task1 from "./task1/Task1";
import Task2 from "./task2/Task2";
import './App.css';
import 'bulma/css/bulma.css';
import MovieDetails from "./task2/MovieDetails";

function App() {
    return (
        <Router>
            <div>
                <div className="navbar">
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <div className="navbar-item">
                                <Link to="/">Home</Link>
                            </div>
                            <div className="navbar-item">
                                <Link to="/task1">Task1</Link>
                            </div>
                            <div className="navbar-item">
                                <Link to="/task2">Task2</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/task1" component={Task1}/>
                    <Route path="/task2" component={Task2}/>
                    <Route path="/movie/:movieId" component={MovieDetails}/>
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => <div className="container has-text-centered"><h1 className="title is-1">Select task!</h1></div>;

export default App;
