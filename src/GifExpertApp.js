import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {

    //const categories = ["Juego de tronos", "Dragon Ball", "One Piece"];

    const [categories, setCategories] = useState([]);
    
    /* const handleAdd = () => {
        setCategories(cat => [...categories, "Cazafantasmas"]);  //asi añadimos elementos al vector usando useState (tenemos que usar useState obligatoriamente)
    } */

    return (
        <>
           
            <h2>GifExpertApp</h2>
            <hr/>

            <AddCategory setCategories={setCategories} />     {/* pasamos una funcion esta vez */}

            <ol>
                {
                    // el key no puede ser el indice y tiene que ser unico
                    // categories.map(category => {
                    // return <li key={category}> {category} </li>    aqui no podemos ejecutar un bucle for, por eso usamos el metodo map
                   //  })                                              cuando usamos {} tenemos que devolver un objeto, por eso for no sirve
                    
                   categories.map(category => (
                        <GifGrid key={category} category={category} />
                   ))
                }
            </ol>
        </>
    );

};

export default GifExpertApp; 