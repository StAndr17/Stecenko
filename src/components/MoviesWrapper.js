import * as React from "react";
import MovieTile from "./MovieTile";

class MoviesWrapper extends React.Component {

    render() {
        const movies = this.props.data.results;

        return (
            <div className="container">
                <div className="tile is-ancestor">
                    <div className="tile is-parent is-vertical is-6">
                        {movies.map((current, inx) => inx % 2 ? null : <MovieTile movie={current}/>)}
                    </div>
                    <div className="tile is-parent is-vertical is-6">
                        {movies.map((current, inx) => inx % 2 ? <MovieTile movie={current}/> : null)}
                    </div>
                </div>
            </div>

        );
    }
}

export default MoviesWrapper;
