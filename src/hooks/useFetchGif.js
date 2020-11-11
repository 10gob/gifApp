import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs.js'

// exportamos la funcion que a su vez devuelve un objeto
export const useFetchGif = (category) => {

    const [state, setState] = useState ({datos:[], loading: true});

    // un effect se ejecuta la primera vez que carga la pagina o cada vez que el elemento indicado se actualiza
    useEffect(() => { // los efectos no pueden ser una funcion asincrona
        getGifs(category)      // esto es una promesa
            .then(imgs => setState({datos: imgs, loading: false}));      // es lo mismo que .then(setImages)
    }, [category]);   // vector de dependencias. Escribimos category por si el elemento varia y tenemos que volver a cargar la pagina

    return state;
}
