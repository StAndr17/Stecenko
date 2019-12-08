import * as React from "react";
import data from "./data";
import MoviesWrapper from "../components/MoviesWrapper";


class Task1 extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="title is-1">Popular Movies</h1>
                <MoviesWrapper data={data}/>
            </div>
        );
    }
}

export default Task1;
