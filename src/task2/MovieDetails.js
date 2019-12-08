import * as React from "react";
import {apiKey, circleStyle, createImageLink} from "../utils";
import {CircularProgressbar} from "react-circular-progressbar";
import MoviePersonCard from "./MoviePersonCard";

class MovieDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {movie: {}, credits: {}, isLoaded: false, isCreditsLoaded: false}
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${apiKey()}&language=en-US`)
            .then(response => response.json())
            .then(responseData => this.setState({movie: responseData, isLoaded: true}));

        fetch(`https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=${apiKey()}&language=en-US`)
            .then(response => response.json())
            .then(responseData => this.setState({credits: responseData, isCreditsLoaded: true}));
    }

    render() {
        const {movie, credits, isLoaded, isCreditsLoaded} = this.state;
        if (!isLoaded || !isCreditsLoaded) return <h1 className="title is-3">Loading...</h1>;
        const percentage = movie.vote_average * 10;

        console.log(credits);

        return (
            <div className="container" style={{marginTop: "50px"}}>
                <div className="columns">
                    <div className="column is-4">
                        <figure className="image">
                            <img alt={movie.title} src={createImageLink(movie.poster_path)}/>
                        </figure>
                    </div>
                    <div className="column">
                        <div>
                            <span className="title is-4">{movie.title}</span>
                            <span style={{fontSize: "22px"}}>{`  (${new Date(movie.release_date).getFullYear()})`}</span>
                        </div>
                        <div className="columns is-vcentered" style={{marginTop: "20px"}}>
                            <div className="column is-1">
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={circleStyle(percentage)}
                                />
                            </div>
                            <div className="column">
                                <span className="title is-6">User<br/>Score</span>
                            </div>
                        </div>
                        <div style={{marginTop: "20px"}}>
                            <p className="title is-5">Overview</p>
                            <div>{movie.overview}</div>
                        </div>
                        <div className="columns is-vcentered" style={{marginTop: "20px"}}>
                            <div className="column is-2">
                                <span className="title is-6">Genres:</span>
                                <br/>
                                <span className="title is-6">Budget:</span>
                                <br/>
                                <span className="title is-6">Revenue:</span>
                                <br/>
                                <span className="title is-6">Length:</span>
                            </div>
                            <div className="column">
                                <span>{movie.genres.map(genre => genre.name).join(", ")}</span>
                                <br/>
                                <span>{`${movie.budget} $`}</span>
                                <br/>
                                <span>{`${movie.revenue} $`}</span>
                                <br/>
                                <span>{`${movie.runtime} minutes`}</span>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="columns">
                    <div className="column">
                        <p className="title is-5">{`Cast (${credits.cast.length})`}</p>
                        {credits.cast
                            .filter(person => person.profile_path != null)
                            .map(person => <MoviePersonCard name={person.name} role={person.character} path={person.profile_path} key={person.id + Math.random()}/>)}
                    </div>
                    <div className="column">
                        <p className="title is-5">{`Crew (${credits.crew.length})`}</p>
                        {credits.crew
                            .filter(person => person.profile_path != null)
                            .map(person => <MoviePersonCard name={person.name} role={person.job} path={person.profile_path} key={person.id + Math.random()}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDetails;
