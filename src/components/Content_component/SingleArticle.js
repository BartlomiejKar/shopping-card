import React from 'react';

export const SingleArticle = (props) => {
    const { description, title, img } = props.location
    return (
        <div>
            <h1>
                {title}
            </h1>
            <img src={img} alt="" />
            <p>{description}</p>
        </div>
    )
}