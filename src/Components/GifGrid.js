import React from 'react'
import { GifGridItem } from './GifGridItem';
import {useFetchGif} from '../hooks/useFetchGif.js';

export const GifGrid = ({category}) => {

    // const estado = useFetchGif();   esto nos devuelve el objeto
    const {datos: image, loading} = useFetchGif(category);   // esto nos devuelve el objeto desestructurado. Los nombres de las propiedades deben coincidir con los usados en el hook
    // podemos renombrar las propiedades de un objeto desestructurado de la siguiente forma

    return (
        <>
            <h3>{category}</h3> 
            
            {loading && <h4>Cargando</h4>}   {/* si loading es true, se ejecuta esta linea e imprime el parrafo */}

            <div className="card-grid">
                {
                    image.map( img => {
                        return <GifGridItem  
                        key={img.id}
                        {...img} />           // img={img} Enviamos las propiedades de img como propiedades independientes
                    })
                    /*  image.map( img => {             // cuando no ponemos las llaves estamos realizando un return implicito
                        return <li key={img.id}> {img.title}</li>
                    }) */

                    // lo mismo pero desectructurando
                    /* image.map( ({id, title}) => {                  
                        return <li key={id}> {title}</li>
                    }) */
                }              
            </div>
        </>
    )
}
