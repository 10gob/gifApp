import React, {useState} from 'react'
import PropTypes from 'prop-types'; 

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState("");    // tambien podemos poner un string vacio ("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value);       
        /* console.log(e.target.value) */
       
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length > 2){    // si la cadena no tiene mas de dos caracteres no permitimos la validacion
            setCategories( cat => [inputValue, ...cat]);   // podriamos pasar las categorias, pero no es necesario, ya que el setCategories puede llamarse con un callback que guarda el 
        //console.log("Submit hecho");                    estado anterior

        /* setCategories( cat => [...cat, inputValue]);  el ejemplo de arriba inserta el elemento al principio, y esta linea lo inserta al final */
            setInputValue('');
        }
    }

    return (  // como solo devolvemos un elemento (el form) no es necesario usar los fragments
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange}></input>    {/* onChange se activa cada vez que la caja de texto del input cambia */}
        </form>                                  //  onChange={ (e) => handleInputChange(e)}  onChange recibe el evento y se lo pasa a otra funcion
    )
}

AddCategory.propTypes = { 
    setCategories: PropTypes.func.isRequired    // indicamos que la propiedad saludo de este componente debe ser un string y que es obligatorio especificar su valor.
};