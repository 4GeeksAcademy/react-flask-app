import React from 'react';



export const Card = ({ title, episodeId }) => {

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h3>Episodio: {episodeId}</h3>
            </div>
        </div>
    )
}