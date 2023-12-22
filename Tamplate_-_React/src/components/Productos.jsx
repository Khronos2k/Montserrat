/**
 * 
 * useState: Nos permite manejar estados en el componente, donde al cambiar vuelve a renderizar
 * el componente para reflejar en la interfaz ese  cambio 
 * 
 * useEffect: Ejecutar efectos - Hook que nos permite ejecutar codigo arbitrario ( lo que quieras )
 * cuando se monta el componente en el DOM y/o cambian sus dependencias
 */

import { useEffect, useState } from "react";

function Productos(){
    // Creamos un estado para guardar el total de productos
    const [totalProducts, setTotalProducts] = useState(0);

    // Creamos una función para hacer la petición a la API
    const getProducts = async() =>{
        // Usamos fetch para hacer la petición
        const resp = await fetch('http://localhost:3002/api/Productos');
        const data = await resp.json()
        return data
    }

    // Usamos useEffect para hacer la petición cuando el componente se monta
    useEffect(  () =>{
        getProducts()
        .then(({data})  => {
            // Guardamos el total de productos en el estado, no el array de data
            setTotalProducts(data.length)
        })
    },[])

    // Mostramos el total de productos como un elemento h3
    return(
        <div  id="content-wrapper" className="d-flex flex-column">
            <h3>{totalProducts}</h3>
        </div>
    )

}

export default Productos;