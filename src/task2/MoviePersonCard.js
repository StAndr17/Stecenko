import React from "react";

const MoviePersonCard = ({name, role, path}) => {
    return (
        <div className="card" style={{marginBottom: "15px", paddingLeft: "10px"}}>
            <div className="columns is-vcentered">
                <div className="column is-3">
                    <figure className="image is-square">
                        <img alt={name} className="is-rounded" src={`https://image.tmdb.org/t/p/original${path}`}/>
                    </figure>
                </div>
                <div className="column">
                    <div className="title is-6">{name}</div>
                    <div>{role}</div>
                </div>
            </div>
        </div>
    );
};

export default MoviePersonCard;
