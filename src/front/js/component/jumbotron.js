import React from 'react'; 



export const Jumbotron = ({ title, image}) => {
    
    return (
        <div>
            <h3>
                {title}
            </h3>
            <img src={image} width={'300px'} />
        </div>
    )
}