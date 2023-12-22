import React, { useState } from 'react';
import Productos from './Productos'; // Importa el componente Productos
import mandalorian from '../assets/images/mandalorian.jpg'
import DataContent from './DataContent';
import Genres from './Genres';

function ContentRowTop(){

    // Crea un estado para guardar el total de productos
    const [totalProducts, setTotalProducts] = useState(0);

    // Crea una función que actualice el estado con el valor que le pasas
    const updateTotalProducts = (value) => {
        setTotalProducts(value);
    }


    const dataBoxes = [
      {
        title: "Total de Productos",
        amount: totalProducts,
        icon: 'fa-film',
        styles: ['border-left-primary' ,'text-primary']
      },
      {
        title: "Total de Usuarios",
        amount: 79,
        icon: 'fa-award',
        styles: [ 'border-left-success' ,'text-success']
      },

    ]


    return(
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
        {/* Content Row Movies*/}
        <div className="row">
          {/* Movies in Data Base */}
          {
            dataBoxes.map((dataBox, i) =>(
              <DataContent key={i} dataBox = {dataBox}/>
            ))
          }
        </div>
        {/* End movies in Data Base */}
        {/* Content Row Last Movie in Data Base */}

      </div>
    )
}

export default ContentRowTop;