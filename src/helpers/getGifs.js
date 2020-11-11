 
export const getGifs = async(category) => {
        // encodeURI adapta el string al formato correcto de un direccion web: quita los espacios, cambia las tildes, etc
        console.log(category)
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=43Chhx0oE0atkcYXYWN2ctHaDCQ9YB8O`;     
        const resp = await fetch(url);
        const {data} = await resp.json();    // desestructuramos los datos
        
        //console.log(data);

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url:img.images?.downsized_medium.url     // ? para asegurarnos que el elemento existe
            }
        })

        return gifs;
        /* console.log(gifs);
        setImage(gifs); */
    }