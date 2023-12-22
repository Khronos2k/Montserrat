import { useEffect, useState } from 'react';
import Montserrat from '../assets/images/newLogoMontserrat.jpg';
// import { useParams } from 'react-router-dom';

function LastMovie(props) {
    // const param = useParams();
    const [movie, setMovie] = useState({});
    const [img, setImg] = useState('');


    const getMovie = async (url,  ) =>{
      const data = await fetch(url)
      const response = await data.json();

      return response
    }



    useEffect(() =>{
      getMovie('http://localhost:3031/api/movies/2')
      .then(({ data }) => setMovie(data))

    }, [])

    return ( 
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            {/* <h3>Película con ID: { param.idParam }</h3> */}
            <h5 className="m-0 font-weight-bold text-gray-800">
              {movie.title}
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "40rem" }}
                src={Montserrat}
                alt=" Image - Montserrat "
              />
            </div>
            <p>
            Montserrat es un restobar que te ofrece lo mejor de la gastronomía italiana, 
            con una variedad de platos, bebidas y postres que deleitarán tu paladar. 
            Disfruta de nuestras pastas caseras, pizzas a la piedra, ensaladas, carnes, pescados y pollos, 
            acompañados de una selección de vinos, cervezas, cócteles y aperitivos. Y para el final, 
            no te pierdas nuestros exquisitos postres, como tiramisú, panna cotta, cannoli, gelato y más.
            </p>
          </div>
        </div>
      </div>
    );
}

export default LastMovie;