import * as React from "react";
import {circleStyle, createImageLink} from "../utils";
import FixedLengthText from "./FixedLengthText";
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class MovieTile extends React.Component {

    render() {
        const movie = this.props.movie;
        const textLength = 100;
        const percentage = movie.vote_average * 10;
        const detailsLink = `/movie/${movie.id}`;


        return (
            <div className="tile is-child box">
                <div className="columns">
                    <div className="column is-5">
                        <figure className="image">
                            <a href={detailsLink}>
                                <img alt={movie.title} src={createImageLink(movie.poster_path)}/>
                            </a>
                        </figure>
                    </div>
                    <div className="column">
                        <div>
                            <div className="columns is-vcentered">
                                <div className="column is-3">
                                    <CircularProgressbar
                                        value={percentage}
                                        text={`${percentage}%`}
                                        styles={circleStyle(percentage)}
                                    />
                                </div>
                                <div className="column">
                                    <span className="title is-6">{movie.title}</span>
                                    <br/>
                                    <span>{movie.release_date}</span>
                                </div>
                            </div>
                            <div className="title">{movie.title}</div>
                            <div><FixedLengthText text={movie.overview} length={textLength}/></div>
                        </div>
                        <div className="more-info-wrapper">
                            <a href={detailsLink}>
                                <div className="more-info-section container">More Info</div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default MovieTile;
