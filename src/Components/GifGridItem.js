import React from 'react'

export const GifGridItem = ({title, url}) => {
    return (
        <div className="card animate__animated animate__backInUp">       {/* class es una palabra reservada de react. Debemos usar className */}
            <img src={url} alt={title}/>                                  {/* nos conectamos con animate.css desde el index.html */}
            <p>{title}</p>
        </div>
    )
}
